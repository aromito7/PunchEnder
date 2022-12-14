from app.models import db, Reward, environment, SCHEMA
from datetime import datetime, timedelta
from ..models import Reward
from .users import users

# Adds a demo reward, you can add other rewards here if you want


def seed_rewards():

    scooter = Reward(
        project_id=1,
        name='scooter',
        quantity=50,
        price_threshold=100,
        shipping_date=datetime.now(),
        description="Great for going downhill.",
        ships_to="Anywhere in the world",
        includes="1 scooter",
        user=[users[0]]
    )

    bike = Reward(
        project_id=1,
        name='bicycle',
        quantity=10,
        price_threshold=100,
        shipping_date=datetime.now(),
        description="I like to ride my awesome bike!",
        ships_to="United States",
        includes="1 bike, 1 helmet, 1 bike basket",
        user=[users[1]]
    )

    vespa = Reward(
        project_id=1,
        name='vespa',
        quantity=5,
        price_threshold=500,
        shipping_date=datetime.now(),
        description="Perfect for Europeans and/or hipsters.",
        ships_to="Anywhere in the world",
        includes="1 vespa, 1 helmet",
        user=[users[2]]
    )

    car_boat = Reward(
        project_id=2,
        name="carboat",
        quantity=300,
        price_threshold=700000,
        shipping_date=datetime.now(),
        description="Drives and sails with grace and style.",
        ships_to="United States",
        includes="carboat",
        user=users
    )

    car_theater = Reward(
        project_id=3,
        name="self driving entertainment system",
        quantity=500,
        price_threshold=250000,
        shipping_date=datetime.now(),
        description="Enjoy theater quality movie experience while stuck in rush hour traffic!",
        ships_to="Anywhere in the world",
        includes="theater car",
        user=users[-2:]
    )

    tmb1 = Reward(
        project_id=4,
        name="1x Modular Bottle - KS Special",
        quantity=5000,
        price_threshold=69,
        shipping_date=datetime.now() + timedelta(days=90),
        description="Choose your fav color after the campaign ends. Check FAQ section for estimated shipping costs (charged post campaign).",
        ships_to="Anywhere in the world",
        includes="Modular Bottle, 2x Extra Gasket",
        user=users[:1]
    )

    tmb2 = Reward(
        project_id=4,
        name="1x Modular Bottle - Pro",
        quantity=1075,
        price_threshold=89,
        shipping_date=datetime.now() + timedelta(days=90),
        description="""$30 OFF Retail Price
Choose your fav color after the campaign ends. Check FAQ section for estimated shipping costs (charged post campaign).""",
        ships_to="Anywhere in the world",
        includes="Modular Bottle, 25oz/ 750ml Capacity Glass Cup, Extension Part, Metal Straw, Tea/ Fruit Infuser, 2x Extra Gasket, Cleaning Brush",
        user=[users[0]]
    )

    tmb3 = Reward(
        project_id=4,
        name="2x Modular Bottle - Early Bird",
        quantity=1075,
        price_threshold=109,
        shipping_date=datetime.now() + timedelta(days=90),
        description="""$69 OFF Retail Price

Choose your fav colors after the campaign ends. Check FAQ section for estimated shipping costs (charged post campaign).

""",
        ships_to="Anywhere in the world",
        includes="2x Modular Bottle, 4x Extra Gasket",
        user=users
    )

    tmb4 = Reward(
        project_id=4,
        name="2x Modular Bottle - Pro",
        quantity=435,
        price_threshold=149,
        shipping_date=datetime.now() + timedelta(days=90),
        description="""$89 OFF Retail Price
Choose your fav color after the campaign ends. Check FAQ section for estimated shipping costs (charged post campaign).""",
        ships_to="Anywhere in the world",
        includes="2x Modular Bottle, 2x 25ox/ 750ml Capacity Glass Cup, 2x Extension Part, 2x Metal Straw, 2x Tea/ Fruit Infuser, 4x Extra Gasket, 2x Cleaning Brush",
        user=users[-2:]
    )

    tmb5 = Reward(
        project_id=4,
        name="3x Modular Bottle - KS Special",
        quantity=2229,
        price_threshold=159,
        shipping_date=datetime.now() + timedelta(days=60),
        description="""$108 OFF Retail Price

Choose your fav colors after the campaign ends. Check FAQ section for estimated shipping costs (charged post campaign).""",
        ships_to="Anywhere in the world",
        includes="3x Modular Bottle, 6x Extra Gasket",
        user=users[::3]
    )

    tmb6 = Reward(
        project_id=4,
        name="4x Modular Bottle - KS Special",
        quantity=159,
        price_threshold=199,
        shipping_date=datetime.now() + timedelta(days=90),
        description="""$157 OFF Retail Price

Choose your fav colors after the campaign ends. Check FAQ section for estimated shipping costs (charged post campaign).""",
        ships_to="Anywhere in the world",
        includes="4x Modular Bottle, 8x Extra Gasket",
        user=users[1::3]
    )

    tmb7 = Reward(
        project_id=4,
        name="3x Modular Bottle - Pro",
        quantity=35,
        price_threshold=219,
        shipping_date=datetime.now() + timedelta(days=90),
        description="""$138 OFF Retail Price
Choose your fav color after the campaign ends. Check FAQ section for estimated shipping costs (charged post campaign).""",
        ships_to="Anywhere in the world",
        includes="3x Modular Bottle, 3x 25ox/ 750ml Capacity Glass Cup, 3x Extension Part, 3x Metal Straw, 3x Tea/ Fruit Infuser, 6x Extra Gasket, 3x Cleaning Brush",
        user=users[1::3]
    )

    tmb8 = Reward(
        project_id=4,
        name="5x Modular Bottle - KS",
        quantity=50,
        price_threshold=249,
        shipping_date=datetime.now() + timedelta(days=90),
        description="""$196 OFF Retail Price

Choose your fav colors after the campaign ends. Check FAQ section for estimated shipping costs (charged post campaign).""",
        ships_to="Anywhere in the world",
        includes="5x Modular Bottle, 10x Extra Gasket",
        user=users[1::2]
    )

    tmb9 = Reward(
        project_id=4,
        name="4x Modular Bottle - Pro",
        quantity=35,
        price_threshold=279,
        shipping_date=datetime.now() + timedelta(days=90),
        description="""$197 OFF Retail Price
Choose your fav color after the campaign ends. Check FAQ section for estimated shipping costs (charged post campaign).""",
        ships_to="Anywhere in the world",
        includes="4x Modular Bottle, 4x 25ox/ 750ml Capacity Glass Cup, 4x Extension Part, 4x Metal Straw, 4x Tea/ Fruit Infuser, 8x Extra Gasket, 4x Cleaning Brush",
        user=users[::4]
    )

    tmb10 = Reward(
        project_id=4,
        name="10x Modular Bottle - KS",
        quantity=50,
        price_threshold=450,
        shipping_date=datetime.now() + timedelta(days=90),
        description="""$440 OFF Retail Price

Choose your fav colors after the campaign ends. Check FAQ section for estimated shipping costs (charged post campaign).""",
        ships_to="Anywhere in the world",
        includes="10x Modular Bottle, 20x Extra Gasket",
        user=users[1::4]
    )

    tmb10 = Reward(
        project_id=4,
        name="20x Modular Bottle - KS",
        quantity=50,
        price_threshold=900,
        shipping_date=datetime.now() + timedelta(days=90),
        description="""$440 OFF Retail Price

Choose your fav colors after the campaign ends. Check FAQ section for estimated shipping costs (charged post campaign).""",
        ships_to="Anywhere in the world",
        includes="20x Modular Bottle, 40x Extra Gasket",
        user=users[2::4]
    )

    hoverboard = Reward(
        project_id=5,
        name="actual floating board",
        quantity=3000,
        price_threshold=2500,
        shipping_date=datetime.now(),
        description="Just like the one in Back to the Future 2!",
        ships_to="Anywhere in the world",
        includes="hoverboard",
        user=users[::2]
    )

    db.session.add(scooter)
    db.session.add(bike)
    db.session.add(vespa)

    db.session.add(car_boat)
    db.session.add(car_theater)
    db.session.add(hoverboard)
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
