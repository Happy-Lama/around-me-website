from website import app
from flask import url_for, render_template

@app.route("/")
@app.route("/index")
@app.route("/home")
def index():
    return render_template("index.html")

