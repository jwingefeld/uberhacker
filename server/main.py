import os
from flask import Flask
from games.typeracer import typeracer

app = Flask(__name__, static_folder="../client", static_url_path='')

games_base_url = '/games/'

app.register_blueprint(typeracer, url_prefix=games_base_url + "typeracer")


@app.route('/')
def index():
    return app.send_static_file("index.html")

if __name__ == "__main__":
    app.run()
