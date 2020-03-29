import json
import os

from flask import Blueprint

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



