import json
import requests
from datetime import datetime
from flask import request

from config import Configuration

from . import hubspot # Flask Blueprint
from .api import hubspot_api # HubspotAPI object



@hubspot.route('/test', methods=['GET'])
def test(): return "test"


@hubspot.route('/forms', methods=['GET'])
def get_forms():
    response = hubspot_api.scopes.forms.get_forms()
    return response


@hubspot.route('/forms/<form_id>', methods=['GET'])
def get_form(form_id):
    response = hubspot_api.scopes.forms.get_form(form_id)
    return response


@hubspot.route('/forms/submit/<portal_id>/<form_id>', methods=['POST'])
def submit_form(portal_id, form_id):
    """ Given a portal_id, form_id, and data, submit the form to HubSpot."""
    payload = request.get_json()
    response = hubspot_api.get(f'https://api.hsforms.com/submissions/v3/integration/submit/{portal_id}/{form_id}', payload)
    
    return ([portal_id, form_id, response])














@hubspot.route('/forms/contact/submit', methods=['POST'])
def submit_contact_form():
    data = request.get_json()
    
    portal_id = data['portal_id']
    form_id = data['form_id']
    # portal_id = 40825582
    # form_id = '173c9c27-7e0c-488a-9a62-3618d37a70f3'
        
    payload = {
        "submittedAt": str(datetime.now().timestamp()),
        "fields": [
            {
            "objectTypeId": "0-1",
            "name": "email",
            "value": data['email']
            },
            {
            "objectTypeId": "0-1",
            "name": "firstname",
            "value": data['firstname']
            },
            {
            "objectTypeId": "0-1",
            "name": "lastname",
            "value": data['lastname']
            },
            {
            "objectTypeId": "0-1",
            "name": "phone",
            "value": data['phone']
            }
        ],
        
          "context": {
            "pageUri": "www.cordcuthelp.com/", # Use actual requesting url
            "pageName": "Coming Soon"
        },
        
        
        "legalConsentOptions": {
            "consent": { # Include this object when GDPR options are enabled
            "consentToProcess": True,
            "text": "I agree to allow Example Company to store and process my personal data.",
            "communications": [
                {
                "value": True,
                "subscriptionTypeId": 999,
                "text": "I agree to receive marketing communications from Example Company."
                }
            ]
            }
        }
    }

    payload = json.dumps(payload)
    
    response = hubspot_api.get(f'https://api.hsforms.com/submissions/v3/integration/submit/{portal_id}/{form_id}', payload)
    return response.text
    