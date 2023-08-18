from flask import Blueprint

firebase = Blueprint('firebase', __name__, url_prefix='/firebase')

from . import routes 

