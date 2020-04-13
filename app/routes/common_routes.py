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


@common.route("/description")
def description():
    return render_template('description.html')


@common.route("/ancestry")
def ancestry():
    with open(os.getcwd() + '\\app\\content\\ancestry.json', 'rb') as file:
        data = json.loads(file.read())
    return render_template('ancestry.html', data=data['Ancestries'])


@common.route("/background", methods=['GET'])
def background():
    with open(os.getcwd() + '\\app\\content\\backgrounds.json', 'rb') as file:
        data = json.loads(file.read())
    return render_template('background.html', data=data['backgrounds'])


@common.route("/background_selectors")
def background_selectors():
    return render_template('background_selectors.html')


@common.route("/spells")
def spells():
    with open(os.getcwd() + '\\app\\content\\spells.json', 'rb') as file:
        data = json.loads(file.read())
    return render_template('spells.html', data=data['spells'])
