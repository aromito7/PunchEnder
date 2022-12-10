from app.models import db, Project, environment, SCHEMA
from datetime import datetime

# Adds a demo user, you can add other projects here if you want
def seed_projects():
    demo = Project(
        owner_id= 1,
        name='a/A emotional support group',
        goal_amount=12000,
        current_amount=4500,
        start_date=datetime.now(),
        end_date=datetime.now(),
        short_description="Hello, seeder files!",
        long_description="""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est. Enim sed faucibus turpis in. Amet volutpat consequat mauris nunc. Enim nulla aliquet porttitor lacus. Velit egestas dui id ornare arcu odio ut sem. Id ornare arcu odio ut sem nulla pharetra diam sit. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Facilisi cras fermentum odio eu. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Molestie nunc non blandit massa enim nec. Tristique magna sit amet purus gravida quis blandit turpis. Est ultricies integer quis auctor elit sed vulputate mi sit. Tellus elementum sagittis vitae et.

Sit amet venenatis urna cursus eget nunc scelerisque. Vitae auctor eu augue ut. Ac feugiat sed lectus vestibulum mattis. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Risus ultricies tristique nulla aliquet. Velit ut tortor pretium viverra. Ullamcorper sit amet risus nullam eget. Cursus eget nunc scelerisque viverra mauris in aliquam. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Sed enim ut sem viverra aliquet eget sit.

Vivamus arcu felis bibendum ut tristique et egestas quis. Lobortis scelerisque fermentum dui faucibus in. Praesent semper feugiat nibh sed pulvinar. Egestas sed sed risus pretium quam vulputate. Fermentum iaculis eu non diam phasellus vestibulum. Convallis convallis tellus id interdum velit laoreet id donec. Porttitor rhoncus dolor purus non. Consequat semper viverra nam libero justo. Sagittis aliquam malesuada bibendum arcu vitae elementum. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sit amet risus nullam eget. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Elementum nibh tellus molestie nunc non blandit massa. Aenean sed adipiscing diam donec adipiscing tristique. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu.

Ac turpis egestas sed tempus urna et pharetra. Sed viverra ipsum nunc aliquet bibendum enim. Laoreet non curabitur gravida arcu ac tortor dignissim. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Id faucibus nisl tincidunt eget. Pharetra convallis posuere morbi leo urna molestie at. Feugiat vivamus at augue eget arcu dictum varius duis at. Consequat semper viverra nam libero. Auctor elit sed vulputate mi. In hac habitasse platea dictumst quisque sagittis. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Mattis rhoncus urna neque viverra justo nec ultrices dui. Semper auctor neque vitae tempus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. A cras semper auctor neque vitae. Tincidunt vitae semper quis lectus nulla at volutpat diam. Sollicitudin nibh sit amet commodo nulla. Velit dignissim sodales ut eu sem integer vitae.

Viverra orci sagittis eu volutpat odio facilisis. Sed arcu non odio euismod lacinia at quis risus sed. Tempus imperdiet nulla malesuada pellentesque elit. Vulputate ut pharetra sit amet aliquam id diam maecenas. Venenatis urna cursus eget nunc. Gravida neque convallis a cras semper auctor neque vitae. Consectetur lorem donec massa sapien faucibus et molestie. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Proin nibh nisl condimentum id venenatis. Sem integer vitae justo eget magna.""",
        preview_image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png",
        city="San Francisco",
        state="CA")

    db.session.add(demo)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the projects table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_projects():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.projects RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM projects")

    db.session.commit()
