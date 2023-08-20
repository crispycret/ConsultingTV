from flask import jsonify, request, abort
from werkzeug.exceptions import BadRequest

import requests
import json

from ..firebase import firebase
from core import Configuration



@firebase.errorhandler(400)
def bad_request_error(error):
    ''' Overrides the behaviour of abort(400) to return HTML instead of HTML '''
    response = {
        'error': 'Bad Request',
        'message': error.description or 'The request was malformed or missing required data.'
    }
    return jsonify(response), 400




def preprocess_request():
    error_msg = 'Requires JSON body with keys `path`, `file`. Optionally the key `data` is used to write data to firebase.'
    try:
        if not request.is_json: 
            return abort(400, "Request body must be JSON.")

        params = request.get_json()
        
        path = params.get('path') # global
        filename = params.get('filename') # jsonLd.json
        if not path or not filename: return abort(400, error_msg)    
        
        url = f'{Configuration.FIREBASE_ENDPOINT}/{path}/{filename}'

        payload = params.get('data') # contents of jsonLd.json
        if (payload): payload = json.dumps(payload)
        
        return [url, payload]
    except BadRequest as e:
        print (e)
        return abort(400, "Unknown Error")


def firebase_request():
    url, payload = preprocess_request()
    response = requests.request(request.method, url, data=payload)

    data = {
        'status': response.status_code,
        'data': response.json()
    }

    return data
    
