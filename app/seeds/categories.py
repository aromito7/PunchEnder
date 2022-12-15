from app.models import db, Category, environment, SCHEMA
from datetime import datetime, timedelta

# Adds a demo user, you can add other projects here if you want
arts = Category(name='arts')
comics = Category(name='comics & illustration')
design = Category(name='design & tech')
film = Category(name='film')
food = Category(name='food & craft')
games = Category(name='games')
music = Category(name='music')
publishing = Category(name='publishing')

categories = [arts, comics, design, film, food, games, music, publishing]

def seed_categories():


    for category in categories:
        db.session.add(category)

    db.session.commit()


def undo_categories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM categories")

    db.session.commit()
