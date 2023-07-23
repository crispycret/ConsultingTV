import json
import requests
from datetime import datetime
from flask import request

from config import Configuration

from . import hubspot # Flask Blueprint

from .api import hubspot_api # HubspotAPI object
from .api import payloads # HubspotAPI payloads



@hubspot.route('/test', methods=['GET'])
def test():  return {"status": 200, "response": 'test'}


@hubspot.route('/forms', methods=['GET'])
def get_forms():
    try: 
        response = hubspot_api.scopes.forms.get_forms()
        return {"status": response.status_code, "response": response.text}
    except Exception as e:
        return {"status": 500, "response": str(e)}

@hubspot.route('/forms/<form_id>', methods=['GET'])
def get_form(form_id):
    try:
        response = hubspot_api.scopes.forms.get_form(form_id)
        return {"status": response.status_code, "response": response.text}
    except Exception as e:
        return {"status": 500, "response": str(e)}


@hubspot.route('/forms/submit/<portal_id>/<form_id>', methods=['POST'])
def submit_form(portal_id, form_id):
    """ Given a portal_id, form_id, and form data, submit the form to HubSpot."""
    try: 
        data = request.get_json()

        # Use payload template to build payload
        # Begining structure of payload selection that will expand to include more payload types that can be selected by the client
        payload_type = data.get('payload_type') or 'basic_n_fields_payload' # default to basic_n_fields_payload

        if (payload_type == 'basic_n_fields_payload'):
            payload = payloads.basic_n_fields_payload(data['fields']) 
        else:
            payload = payloads.basic_n_fields_payload(data['fields']) # Again default to basic_n_fields_payload for now

        payload = json.dumps(payload) # converts python dictionary into json string
        
        console.log
        
        # Submit the form using the HubspotAPI object
        response = hubspot_api.scopes.forms.submit_form(portal_id, form_id, payload)
        return {"status": response.status_code, "response": response.text}
    except Exception as e:
        print(e)
        return {"status": 500, "response": str(e)}




