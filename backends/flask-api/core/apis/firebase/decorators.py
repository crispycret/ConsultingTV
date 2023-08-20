from functools import wraps
from .utils import firebase_request



def forward_to_firebase(f):
    ''' Bypasses the function wrapped by this decorator as it is used to forward requests to firebase without modification. '''
    @wraps(f)
    def wrapper(*args, **kwargs):
        return firebase_request()
    return wrapper
    

    
    
