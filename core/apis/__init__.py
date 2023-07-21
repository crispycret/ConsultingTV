
from flask import Blueprint


apis = Blueprint('apis', __name__, url_prefix='/apis/v1')


from . import routes

from .hubspot import hubspot
apis.register_blueprint(hubspot)
