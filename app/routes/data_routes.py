import json
import os

from flask import Blueprint

data = Blueprint('data_routes', __name__)


@data.route('/ancestry_data', methods=['GET'])
def json_data():
    with open(os.getcwd() + '\\app\\content\\ancestry.json', 'rb') as file:
        data = json.loads(file.read())
    return str(data['Ancestries'])


