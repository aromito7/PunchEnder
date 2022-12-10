from app.models import db, backing, environment, SCHEMA
from datetime import datetime
from users import demo
from rewards import demo

# Adds a demo backing, you can add other backings here if you want


def seed_backings():
    demo = backing(
        user_id=1,
        reward_id=1
    )

    db.session.add(demo)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the backings table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_backings():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.backings RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM backings")

    db.session.commit()
