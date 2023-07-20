from flask import Blueprint


# Create the blueprint for the api warpper application
apis = Blueprint('apis', __name__, url_prefix='/api/v1')

# import routes
from . import routes