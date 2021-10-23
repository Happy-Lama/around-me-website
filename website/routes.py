from website import app
from flask import url_for, render_template, redirect
placecards = [
    {
        'name': "Castle Royale",
        'location': "Kampala",
        'distance_from_current_location': 124,
        'rating': 4.5,
        'description': "A fun and lovely place to hangout with family.\nWe serve an assortment of drinks and foods.",
        'img_src': '#'
    },
    {
        'name': "Castle Royale",
        'location': "Namboole",
        'distance_from_current_location': 124,
        'rating': 4.5,
        'description': "A fun and lovely place to hangout with family.\nWe serve an assortment of drinks and foods.",
        'img_src': '#'
    },
    {
        'name': "Castle Royale",
        'location': "Lugogo",
        'distance_from_current_location': 124,
        'rating': 4.5,
        'description': "A fun and lovely place to hangout with family.\nWe serve an assortment of drinks and foods.",
        'img_src': '#'
    }

]
@app.route("/")
@app.route("/index")
@app.route("/home")
def index():
    return render_template("index.html",placecards=placecards)





