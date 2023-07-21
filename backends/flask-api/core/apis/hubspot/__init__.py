from flask import Blueprint

from .api import hubspot_api

hubspot = Blueprint('hubspot', __name__, url_prefix='/hubspot')

from . import routes 

