import json
import os

from flask import render_template, Blueprint, request

common = Blueprint('common_routes', __name__)


@common.route("/")
def startpage():
    return render_template('index.html')


@common.route("/ability")
def ability_score():
    return render_template('ability_score.html')


@common.route('/ancestry_data', methods=['GET'])
def json_data():
    with open(os.getcwd() + '\\app\\content\\ancestry.json', 'rb') as file:
        data = json.loads(file.read())
    return str(data['Ancestries'])


@common.route("/ancestry")
def ancestry():
    with open(os.getcwd() + '\\app\\content\\ancestry.json', 'rb') as file:
        data = json.loads(file.read())
    return render_template('ancestry.html', data=data['Ancestries'])


@common.route('/build_character', methods=['POST'])
def build_character():
    ability_scores = [int(x) for x in request.form.getlist('result_ab_scores[]')]
    return 200
