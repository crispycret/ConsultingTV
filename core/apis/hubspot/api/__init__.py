import requests

from config import Configuration

from .scopes import Scopes
from . import payloads


class HubspotAPI (object):
    ___summary___ = """ 
    Object for interacting with HubSpot API. 
    Requires a HubSpot private app's OAuth token for authorization of requests.
    
    Includes Scope (To use a scope, the private app must have the appropriate scope enabled):
        - forms
        - contacts
        
    Keyword arguments:
    api_key -- A HubSpot private app's OAuth token for authorization. Defaults to Configuration.HUBSPOT_OAUTH_TOKEN loaded from an environment variable.
    Return: return_description
    """
    
    
    def __init__(self, api_key=Configuration.HUBSPOT_OAUTH_TOKEN):
        self.hostname = 'https://api.hubapi.com'
        self.headers = {
            'Authorization': f'Bearer { api_key }',
            'Content-Type': 'application/json' # Required for POST requests to inform server that data is JSON
        }
        
        self.scopes = Scopes(self)
    
  
    
hubspot_api = HubspotAPI() # Instantiate HubspotAPI object for use in route methods.
