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
        user=users
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
        user=[users[0]]
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
        user=[users[1]]
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
        user=[users[2]]
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
        user=[users[3]]
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
        user=[users[4]]
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
        user=users
    )

    cookbook = Reward(
        project_id=5,
        name='Delicious Recipes Cookbook',
        quantity=500,
        price_threshold=50,
        shipping_date=datetime.now() + timedelta(days=30),
        description="A collection of over 100 tasty and easy-to-follow recipes.",
        ships_to="United States",
        includes="Hardcover cookbook",
        user=[users[0]]
    )

    concert_tickets = Reward(
        project_id=6,
        name='Concert Tickets',
        quantity=100,
        price_threshold=200,
        shipping_date=datetime.now() + timedelta(days=60),
        description="Two tickets to see your favorite band live in concert.",
        ships_to="United States",
        includes="2 concert tickets",
        user=[users[1]]
    )

    smart_watch = Reward(
        project_id=7,
        name='Smart Watch',
        quantity=250,
        price_threshold=300,
        shipping_date=datetime.now() + timedelta(days=90),
        description="A high-tech watch with fitness tracking, messaging, and more.",
        ships_to="Anywhere in the world",
        includes="Smart watch, charging cable",
        user=[users[2]]
    )

    vacation_package = Reward(
        project_id=8,
        name='Vacation Package',
        quantity=50,
        price_threshold=1000,
        shipping_date=datetime.now() + timedelta(days=120),
        description="A week-long all-inclusive vacation at a luxury resort.",
        ships_to="Anywhere in the world",
        includes="7 nights accommodation, meals and drinks, activities",
        user=[users[0], users[1]]
    )

    hiking_gear = Reward(
        project_id=9,
        name='Hiking Gear Package',
        quantity=100,
        price_threshold=100,
        shipping_date=datetime.now() + timedelta(days=45),
        description="Everything you need for a day on the trails.",
        ships_to="United States",
        includes="Hiking boots, backpack, water bottle, trail map",
        user=[users[0]]
    )

    yoga_retreat = Reward(
        project_id=9,
        name='Yoga Retreat',
        quantity=20,
        price_threshold=500,
        shipping_date=datetime.now() + timedelta(days=90),
        description="A weekend of yoga and relaxation at a beautiful retreat center.",
        ships_to="United States",
        includes="2 nights accommodation, yoga classes, meals",
        user=[users[1]]
    )

    movie_poster = Reward(
        project_id=9,
        name='Signed Movie Poster',
        quantity=100,
        price_threshold=50,
        shipping_date=datetime.now() + timedelta(days=30),
        description="A signed poster from the film, autographed by the cast and crew.",
        ships_to="United States",
        includes="Signed movie poster",
        user=[users[2]]
    )

    painting = Reward(
        project_id=9,
        name='Original Painting',
        quantity=10,
        price_threshold=500,
        shipping_date=datetime.now() + timedelta(days=60),
        description="An original painting by the artist, created specifically for this project.",
        ships_to="Anywhere in the world",
        includes="Original painting",
        user=[users[0]]
    )


    book_club = Reward(
        project_id=9,
        name='Book Club Membership',
        quantity=50,
        price_threshold=100,
        shipping_date=datetime.now() + timedelta(days=90),
        description="Access to an exclusive online book club with monthly discussions and guest authors.",
        ships_to="Anywhere in the world",
        includes="Book club membership",
        user=[users[1], users[2]]
    )


    db.session.add(scooter)
    db.session.add(bike)
    db.session.add(vespa)

    db.session.add(car_boat)
    db.session.add(car_theater)
    db.session.add(hoverboard)
    db.session.add(cookbook)
    db.session.add(concert_tickets)
    db.session.add(smart_watch)
    db.session.add(vacation_package)
    db.session.add(hiking_gear)
    db.session.add(yoga_retreat)
    db.session.add(movie_poster)
    db.session.add(painting)
    db.session.add(book_club)

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
