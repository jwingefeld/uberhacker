from flask import Blueprint, jsonify, request, abort, session, redirect

api = Blueprint('api', __name__)

players = [
{
    'name' : 'uberardy',
    'leetname' : 'ub3r4rdy',
    'color' : '#ff7f00',
    'score' : 9000
}

]

@api.route("/players")
def return_players():
    return jsonify(players)

@api.route("/login", methods=['POST'])
def add_player():
    player = request.get_json()
    print(player)
    if "name" in player.keys() and "leetname" in player.keys() and "color" in player.keys() and "score" in player.keys():
        players.append(player)
        return redirect("/")
    else:
        abort(400)
