from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
demouser = User(
    firstname='demo', lastname='user', email='demo@aa.io', password='password')
isaac = User(
    firstname='isaac', lastname='ki', email='marnie@aa.io', password='password')
romito = User(
    firstname='alex', lastname='romito', email='bobbie@aa.io', password='password')
alex = User(
    firstname='alex', lastname='auch', email="auchie@aa.io", password='password')
abe = User(
    firstname='abe', lastname='kim', email='akim@aa.io', password='password')
john = User(
    firstname='john', lastname='smith', email='jsmith@aa.io', password='password'
)
users = [demouser, isaac, romito, alex, abe, john]


def seed_users():

    for user in users:
        db.session.add(user)

    # db.session.add(demouser)
    # db.session.add(isaac)
    # db.session.add(alex)
    # db.session.add(romito)
    # db.session.add(abe)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
