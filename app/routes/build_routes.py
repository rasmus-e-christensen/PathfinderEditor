from flask import Blueprint, request

from pdfwriter import save_character_sheet

build = Blueprint('build_routes', __name__)


@build.route('/build_character', methods=['POST'])
def build_character():
    character_dict = {}
    character_dict['ability_scores'] = [int(x) for x in request.form.getlist('result_ab_scores[]')]
    save_character_sheet('PathfinderChar.pdf', {"ability_scores": [10, 10, 12, 12, 16, 18]})
    return 200
