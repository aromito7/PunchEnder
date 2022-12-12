from app.models import db, Reward, environment, SCHEMA
from datetime import datetime
from .users import demouser

# Adds a demo reward, you can add other rewards here if you want


def seed_rewards():

    scooter = Reward(
        project_id=1,
        name='scooter',
        quantity=50,
        price_threshold=100,
        shipping_date=datetime.now(),
        description="Great for going downhill.",
        user=[demouser]
    )


    bike = Reward(
        project_id=1,
        name='bicycle',
        quantity=10,
        price_threshold=100,
        shipping_date=datetime.now(),
        description="I like to ride my awesome bike!",
        user=[demouser]
    )

    vespa = Reward(
        project_id=1,
        name='vespa',
        quantity=5,
        price_threshold=500,
        shipping_date=datetime.now(),
        description="Perfect for Europeans and/or hipsters.",
        user=[demouser]
    )


    db.session.add(scooter)
    db.session.add(bike)
    db.session.add(vespa)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the rewards table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_rewards():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.rewards RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM rewards")

    db.session.commit()
