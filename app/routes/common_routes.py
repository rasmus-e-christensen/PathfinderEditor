import json
import os

from flask import render_template, Blueprint

common = Blueprint('common_routes', __name__)


@common.route("/")
def start_page():
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


@common.route("/spells")
def spells():
    with open(os.getcwd() + '\\app\\content\\spells.json', 'rb') as file:
        data = json.loads(file.read())
    return render_template('spells.html', data=data['spells'])


@common.route("/feats")
def feats():
    with open(os.getcwd() + '\\app\\content\\feats.json', 'rb') as file:
        data = json.loads(file.read())
    return render_template('feat.html', data=data)


@common.route("/equipment")
def equipment():
    with open(os.getcwd() + '\\app\\content\\adv-gear.json', 'rb') as file:
        data = json.loads(file.read())
    return render_template('equipment.html', data=data)
