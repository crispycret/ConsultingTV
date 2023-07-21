import requests


    
class Scope (object):
    
    def __init__(self, api, name, url_path, headers={'Content-Type': 'application/json'}):
        self.api = api
        self.name = name
        self.url_path = url_path
        self.url = f'https://{api.hostname}/{self.url_path}' # include the base url for all requests to this scope

        # headers actually may need to be combined and overwritten with each request having priority over the scope's headers
        # and the scope's headers having priority over the api's headers
        self.headers = {**api.headers, **headers} # combine the headers require for all requests to this scope
    
    def request(self, method, url_path, headers={}, payload={}, url_path_is_full_url=False, bypass_scope_url=False):
        # Build the url for the request. 
        # If the url_path is a full url, use it as is.
        # If the url_path is not a full url, but bypass_scope_url is True, use the api's hostname instead of the scope's url
        # Otherwise, build the url from the scope's url and the url_path 
        url = url_path if url_path_is_full_url else \
            f'{self.api.hosname}/{url_path}' if bypass_scope_url \
                else f'{self.url}/{url_path}' 

        headers = {**self.headers, **headers} # combine the headers for the request
        
        requests.request(method, url, headers=headers, data=payload)
    
    def get(self, url_path, headers={}, payload={}, url_path_is_full_url=False, bypass_scope_url=False):
        response = self.request("GET", url_path, headers, payload, url_path_is_full_url, bypass_scope_url)
        return response.text

    def post(self, url_path, headers={}, payload={}, url_path_is_full_url=False, bypass_scope_url=False):
        response = self.request("POST", url_path, headers, payload, url_path_is_full_url, bypass_scope_url)
        return response.text
 
 
 
class Forms (Scope):
     
    def __init__(self, api):
        super().__init__(api, name='forms', url_path='forms/v2', )
    
    def get_forms(self):
        """ Get all forms from HubSpot. """
        payload = {}
        response = self.get('forms', payload)
        return response
    
    def get_form(self, portal_id, form_id):
        """ Given a form_id, return the form object from HubSpot."""
        payload = {}
        response = self.get(f'forms/{portal_id}/{form_id}', payload)
        return response
    
    def submit_form(self, portal_id, form_id):
        payload = {portal_id, form_id}
        url = f'submissions/v3/integration/submit/{portal_id}/{form_id}'
        response = self.post(url, payload, bypass_scope_url=True)
    


class Contacts (Scope):
    def __init__(self, api):
        super().__init__(api, name='contacts', url_path='contacts/v1')


    
class Scopes(object):
        
    def __init__(self, api):
        self.forms = Forms(api)
        self.contacts = Contacts(api)