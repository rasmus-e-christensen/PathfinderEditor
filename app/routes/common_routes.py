from flask import render_template, Blueprint

common = Blueprint('common_routes', __name__)


@common.route("/")
def startpage():
    return render_template('index.html')


@common.route("/ability_score")
def ability_score():
    return render_template('ability_score.html')
