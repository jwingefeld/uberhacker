import os
from flask import Flask

from api import api

from games.typeracer import typeracer

# Initializes Flask app.
# static_url_path='' causes all files from static_folder to be served. (e.g. /index.html)
app = Flask(__name__, static_folder="../client", static_url_path='')


app.register_blueprint(api, url_prefix="/api")

games_base_url = '/games/'

app.register_blueprint(typeracer, url_prefix=games_base_url + "typeracer")


@app.route('/')
def index():
    return app.send_static_file("index.html")

if __name__ == "__main__":
    app.run('0.0.0.0', debug=True)
