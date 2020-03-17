import flask
from flask import render_template, request, Blueprint, redirect, url_for

login = Blueprint('login_routes', __name__)


@login.route('/sessionLogout', methods=['GET'])
def session_logout():
    response = flask.make_response(flask.redirect('/'))
    response.set_cookie('session', expires=0)
    return response


@login.route('/homepage', methods=['GET'])
def homepage():
        return redirect(url_for('homepage.home'))


@login.route('/reset', methods=['GET'])
def reset_password():
    return render_template('reset.html')
