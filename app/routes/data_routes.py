import json
import os

from flask import Blueprint, send_from_directory

data = Blueprint('data_routes', __name__)


@data.route('/ancestry_data', methods=['GET'])
def ancestry_data():
    with open(os.getcwd() + '\\app\\content\\ancestry.json', 'rb') as file:
        data = json.loads(file.read())
    return str(data['Ancestries'])


@data.route('/background_data', methods=['GET'])
def background_data():
    with open(os.getcwd() + '\\app\\content\\backgrounds.json', 'rb') as file:
        data = json.loads(file.read())
    return str(data['backgrounds'])


@data.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(data.root_path, 'static'),
                               '../static/favicon.ico', mimetype='image/vnd.microsoft.icon')
