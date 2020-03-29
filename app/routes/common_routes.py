import json
import os

from flask import render_template, Blueprint

common = Blueprint('common_routes', __name__)


@common.route("/")
def startpage():
    return render_template('index.html')


@common.route("/ability")
def ability_score():
    return render_template('ability_score.html')


@common.route("/ancestry")
def ancestry():
    with open(os.getcwd() + '\\app\\content\\ancestry.json', 'rb') as file:
        data = json.loads(file.read())
    return render_template('ancestry.html', data=data['Ancestries'])
