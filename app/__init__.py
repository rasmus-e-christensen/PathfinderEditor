#!flask/bin/python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from settings import DB_URI

authorizations = {
    'apikey': {
        'type': 'apiKey',
        'in': 'header',
        'name': 'X-API-KEY'
    }
}

application = Flask(__name__)
application.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
application.config['SESSION_COOKIE_HTTPONLY'] = True
application.config['REMEMBER_COOKIE_HTTPONLY'] = True
db = SQLAlchemy(application)

from app.routes.common_routes import common
from app.routes.login_routes import login

application.register_blueprint(common)
application.register_blueprint(login)





