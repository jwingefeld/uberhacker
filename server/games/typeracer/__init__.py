from flask import Blueprint, jsonify

typeracer = Blueprint('typeracer', __name__)

@typeracer.route("/")
def test():
    return "test"
