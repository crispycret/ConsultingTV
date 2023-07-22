from datetime import datetime


def basic_n_fields_payload(
    fields={'fieldName1': 'value1'}, 
    context=['www.cordcuthelp.com/', 'Coming Soon'],
    legal=['Consulting.TV', True, ]
):

 return {
        "submittedAt": str(datetime.now().timestamp()),
        
        "fields": [{ 
            "objectTypeId": "0-1",
            "name": key,
            "value": value
        } for key, value in fields.items()],
        
          "context": {
            "pageUri": context[0], # Represents where the form was submitted from
            "pageName": context[1] # Page Identifier
        },
        
        
        "legalConsentOptions": {
            "consent": { # Include this object when GDPR options are enabled
            "consentToProcess": legal[1],
            "text": f"I agree to allow {legal[0]} to store and process my personal data.",
            "communications": [
                {
                "value": True,
                "subscriptionTypeId": 999,
                "text": f"I agree to receive marketing communications from {legal[0]}."
                }
            ]
            }
        }
    }
 
 
 
 
 
 