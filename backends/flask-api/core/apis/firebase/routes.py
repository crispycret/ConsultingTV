from flask import request
from functools import wraps

import requests
import json

from ..firebase import firebase
from ..firebase.decorators import forward_to_firebase
from core import Configuration


@firebase.route('/', methods=['PATCH', 'GET'])
@forward_to_firebase
def forward(): 
    print('forward')



# Now Integrate into Next.js application.
