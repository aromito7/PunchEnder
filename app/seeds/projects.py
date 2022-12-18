from app.models import db, Project, environment, SCHEMA
from datetime import datetime, timedelta
from .categories import arts, comics, design, film, food, games, music, publishing

# Adds a demo user, you can add other projects here if you want
def seed_projects():
    demo = Project(
        owner_id= 1,
        categories=[design, arts],
        name='a/A emotional support group',
        goal_amount=12000,
        current_amount=4500,
        start_date=datetime.now(),
        end_date=datetime.now() + timedelta(days = 365),
        short_description="Hello, seeder files!",
        long_description="""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est. Enim sed faucibus turpis in. Amet volutpat consequat mauris nunc. Enim nulla aliquet porttitor lacus. Velit egestas dui id ornare arcu odio ut sem. Id ornare arcu odio ut sem nulla pharetra diam sit. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Facilisi cras fermentum odio eu. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Molestie nunc non blandit massa enim nec. Tristique magna sit amet purus gravida quis blandit turpis. Est ultricies integer quis auctor elit sed vulputate mi sit. Tellus elementum sagittis vitae et.

Sit amet venenatis urna cursus eget nunc scelerisque. Vitae auctor eu augue ut. Ac feugiat sed lectus vestibulum mattis. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Risus ultricies tristique nulla aliquet. Velit ut tortor pretium viverra. Ullamcorper sit amet risus nullam eget. Cursus eget nunc scelerisque viverra mauris in aliquam. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Sed enim ut sem viverra aliquet eget sit.

Vivamus arcu felis bibendum ut tristique et egestas quis. Lobortis scelerisque fermentum dui faucibus in. Praesent semper feugiat nibh sed pulvinar. Egestas sed sed risus pretium quam vulputate. Fermentum iaculis eu non diam phasellus vestibulum. Convallis convallis tellus id interdum velit laoreet id donec. Porttitor rhoncus dolor purus non. Consequat semper viverra nam libero justo. Sagittis aliquam malesuada bibendum arcu vitae elementum. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sit amet risus nullam eget. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Elementum nibh tellus molestie nunc non blandit massa. Aenean sed adipiscing diam donec adipiscing tristique. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu.

Ac turpis egestas sed tempus urna et pharetra. Sed viverra ipsum nunc aliquet bibendum enim. Laoreet non curabitur gravida arcu ac tortor dignissim. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Id faucibus nisl tincidunt eget. Pharetra convallis posuere morbi leo urna molestie at. Feugiat vivamus at augue eget arcu dictum varius duis at. Consequat semper viverra nam libero. Auctor elit sed vulputate mi. In hac habitasse platea dictumst quisque sagittis. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Mattis rhoncus urna neque viverra justo nec ultrices dui. Semper auctor neque vitae tempus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. A cras semper auctor neque vitae. Tincidunt vitae semper quis lectus nulla at volutpat diam. Sollicitudin nibh sit amet commodo nulla. Velit dignissim sodales ut eu sem integer vitae.

Viverra orci sagittis eu volutpat odio facilisis. Sed arcu non odio euismod lacinia at quis risus sed. Tempus imperdiet nulla malesuada pellentesque elit. Vulputate ut pharetra sit amet aliquam id diam maecenas. Venenatis urna cursus eget nunc. Gravida neque convallis a cras semper auctor neque vitae. Consectetur lorem donec massa sapien faucibus et molestie. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Proin nibh nisl condimentum id venenatis. Sem integer vitae justo eget magna.""",
        preview_image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png",
        city="San Francisco",
        state="CA")

    demo1 = Project(
        owner_id= 2,
        categories=[design],
        name='Research to develop a car-boat',
        goal_amount=1800000,
        current_amount=1234567,
        start_date=datetime.now(),
        end_date=datetime.now() + timedelta(days = 1800),
        short_description="Perfect for amphibeous travelling!",
        long_description="""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est. Enim sed faucibus turpis in. Amet volutpat consequat mauris nunc. Enim nulla aliquet porttitor lacus. Velit egestas dui id ornare arcu odio ut sem. Id ornare arcu odio ut sem nulla pharetra diam sit.""",
        preview_image="https://www.motortrend.com/uploads/sites/5/2020/04/Watercar-Panther-amphibious-car-05.jpg?fit=around%7C875:492",
        city="Tampa Bay",
        state="FL")

    demo2 = Project(
        owner_id= 3,
        categories=[design, film],
        name='Self driving car',
        goal_amount=3100000,
        current_amount=400000,
        start_date=datetime.now(),
        end_date=datetime.now() + timedelta(days = 1100),
        short_description="Now everyone can enjoy a movie on a roadtrip!",
        long_description="""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est. Enim sed faucibus turpis in. Amet volutpat consequat mauris nunc. Enim nulla aliquet porttitor lacus. Velit egestas dui id ornare arcu odio ut sem. Id ornare arcu odio ut sem nulla pharetra diam sit. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Facilisi cras fermentum odio eu. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Molestie nunc non blandit massa enim nec. Tristique magna sit amet purus gravida quis blandit turpis. Est ultricies integer quis auctor elit sed vulputate mi sit. Tellus elementum sagittis vitae et.

Sit amet venenatis urna cursus eget nunc scelerisque. Vitae auctor eu augue ut. Ac feugiat sed lectus vestibulum mattis. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Risus ultricies tristique nulla aliquet. Velit ut tortor pretium viverra. Ullamcorper sit amet risus nullam eget. Cursus eget nunc scelerisque viverra mauris in aliquam. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Sed enim ut sem viverra aliquet eget sit.

Vivamus arcu felis bibendum ut tristique et egestas quis. Lobortis scelerisque fermentum dui faucibus in. Praesent semper feugiat nibh sed pulvinar. Egestas sed sed risus pretium quam vulputate. Fermentum iaculis eu non diam phasellus vestibulum. Convallis convallis tellus id interdum velit laoreet id donec. Porttitor rhoncus dolor purus non. Consequat semper viverra nam libero justo. Sagittis aliquam malesuada bibendum arcu vitae elementum. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sit amet risus nullam eget. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Elementum nibh tellus molestie nunc non blandit massa. Aenean sed adipiscing diam donec adipiscing tristique. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu.

Ac turpis egestas sed tempus urna et pharetra. Sed viverra ipsum nunc aliquet bibendum enim. Laoreet non curabitur gravida arcu ac tortor dignissim. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Id faucibus nisl tincidunt eget. Pharetra convallis posuere morbi leo urna molestie at. Feugiat vivamus at augue eget arcu dictum varius duis at. Consequat semper viverra nam libero. Auctor elit sed vulputate mi. In hac habitasse platea dictumst quisque sagittis. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Mattis rhoncus urna neque viverra justo nec ultrices dui. Semper auctor neque vitae tempus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. A cras semper auctor neque vitae. Tincidunt vitae semper quis lectus nulla at volutpat diam. Sollicitudin nibh sit amet commodo nulla. Velit dignissim sodales ut eu sem integer vitae.

Viverra orci sagittis eu volutpat odio facilisis. Sed arcu non odio euismod lacinia at quis risus sed. Tempus imperdiet nulla malesuada pellentesque elit. Vulputate ut pharetra sit amet aliquam id diam maecenas. Venenatis urna cursus eget nunc. Gravida neque convallis a cras semper auctor neque vitae. Consectetur lorem donec massa sapien faucibus et molestie. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Proin nibh nisl condimentum id venenatis. Sem integer vitae justo eget magna.""",
        preview_image="https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/AV%20Siemens.jpg?itok=tQ8u-Tjc",
        city="San Francisco",
        state="CA")

    demo3 = Project(
        owner_id= 1,
        categories=[food, design],
        name='TMB | The Modular Bottle',
        goal_amount=11000,
        current_amount=84566,
        start_date=datetime.now(),
        end_date=datetime.now() + timedelta(days = 180),
        short_description="Glass interior, a cool insulating exterior, different tops, secret compartment, tea infusion and 5 other features you will love!",
        long_description="""Introducing TMB | The Modular Bottle

Each TMB comes with a variation of tops so you are good to go for any situation - daily drive to work, at your gym, or just thrown in the bag.

The interior is made out of durable borosilicate glass - so your drinks will have a perfect taste no matter how many times you use it. Another advantage is that it makes it very easy to clean.
The mid-section is translucent so you can see what liquid you have inside and how much is left.

Switching to a reusable bottle is one of those small things you can do that add up over time. That benefits you and the environment.

One TMB botte can replace thousands of single use cups or plastic bottles. You get to help the enviroment and save big
On average, a drink made at home is $2 cheaper than one you buy on the go. So, in just a month of use, you already covered the cost of the bottle

Self-balancing cupholder, snack holder, phone stand, charging dock, remote tray, storage pocket. All in a light, compact & modular pack.

Our Last project - The CouchConsole was funded on Kickstarter in 2021. We've managed to manufacture and shipping it to backers all around the world - with great reviews and a finished product we are proud of.

Thanks to the amazing support we were even able to upgrade, for all the backers, the initial design with a hard exterior shell and a padded armrest on the back of the organizing tray that we are proud of.

Of course there were challenges along the way, but we've managed to overcome them and learn a lot in the process.

Risks and challenges
We've already handled a complex mass production line for our first project. Not only we've managed to ship it to backers all over the world, we've also been able to include free upgrades for the final version that were not mentioned during the campaign.
We are sure we will be able to handle production for the TMB and deliver a product that will make your daily life better.
We are only concerned about delays as there are many things that might not go as smoothly as we'd like to:
- molds can have problems during the first trials and need to be adjusted
- there can be material delays if there are shortages or a new pandemic
- to some parts or the world shipping might get delayed due to customs procedures

We will keep you informed along the way.

Learn about accountability on Kickstarter
Environmental commitments
Visit our Environmental Resources Center to learn how Kickstarter encourages sustainable practices.
Long-lasting design
Just like the glasses we use at home for years and can be used as many times as needed without getting nasty smells. This is a product that will alst you for years to come.

Reusability and recyclability
Opaque plastic case parts are made from recycled materials.

Sustainable Distribution
We will keep the packaging as small as possible to be able to ship many items at once. Plus this being a kickstarter campaign will allow us for grouped shipping optimizing costs and fuel used.

Something else
Because it's modular you will be able to replace or upgrade any parts without needing to replace the entire product.""",
        preview_image="https://ksr-ugc.imgix.net/assets/039/411/533/847ae910f17dce52ca8d089d3ec2c900_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1670415744&auto=format&frame=1&q=92&s=83851b115d6f774df0415b1cc35d1985",
        city="San Francisco",
        state="CA")

    demo4 = Project(
        owner_id= 1,
        categories=[design, games],
        name='Hoverboard',
        goal_amount=2000000,
        current_amount=888888,
        start_date=datetime.now(),
        end_date=datetime.now() + timedelta(days = 1100),
        short_description="Long overdue since 2015.",
        long_description="""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est. Enim sed faucibus turpis in. Amet volutpat consequat mauris nunc. Enim nulla aliquet porttitor lacus. Velit egestas dui id ornare arcu odio ut sem. Id ornare arcu odio ut sem nulla pharetra diam sit. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Facilisi cras fermentum odio eu. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Molestie nunc non blandit massa enim nec. Tristique magna sit amet purus gravida quis blandit turpis. Est ultricies integer quis auctor elit sed vulputate mi sit. Tellus elementum sagittis vitae et.

Sit amet venenatis urna cursus eget nunc scelerisque. Vitae auctor eu augue ut. Ac feugiat sed lectus vestibulum mattis. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Risus ultricies tristique nulla aliquet. Velit ut tortor pretium viverra. Ullamcorper sit amet risus nullam eget. Cursus eget nunc scelerisque viverra mauris in aliquam. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Sed enim ut sem viverra aliquet eget sit.

Vivamus arcu felis bibendum ut tristique et egestas quis. Lobortis scelerisque fermentum dui faucibus in. Praesent semper feugiat nibh sed pulvinar. Egestas sed sed risus pretium quam vulputate. Fermentum iaculis eu non diam phasellus vestibulum. Convallis convallis tellus id interdum velit laoreet id donec. Porttitor rhoncus dolor purus non. Consequat semper viverra nam libero justo. Sagittis aliquam malesuada bibendum arcu vitae elementum. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sit amet risus nullam eget. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Elementum nibh tellus molestie nunc non blandit massa. Aenean sed adipiscing diam donec adipiscing tristique. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu.

Ac turpis egestas sed tempus urna et pharetra. Sed viverra ipsum nunc aliquet bibendum enim. Laoreet non curabitur gravida arcu ac tortor dignissim. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Id faucibus nisl tincidunt eget. Pharetra convallis posuere morbi leo urna molestie at. Feugiat vivamus at augue eget arcu dictum varius duis at. Consequat semper viverra nam libero. Auctor elit sed vulputate mi. In hac habitasse platea dictumst quisque sagittis. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Mattis rhoncus urna neque viverra justo nec ultrices dui. Semper auctor neque vitae tempus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. A cras semper auctor neque vitae. Tincidunt vitae semper quis lectus nulla at volutpat diam. Sollicitudin nibh sit amet commodo nulla. Velit dignissim sodales ut eu sem integer vitae.

Viverra orci sagittis eu volutpat odio facilisis. Sed arcu non odio euismod lacinia at quis risus sed. Tempus imperdiet nulla malesuada pellentesque elit. Vulputate ut pharetra sit amet aliquam id diam maecenas. Venenatis urna cursus eget nunc. Gravida neque convallis a cras semper auctor neque vitae. Consectetur lorem donec massa sapien faucibus et molestie. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Proin nibh nisl condimentum id venenatis. Sem integer vitae justo eget magna.""",
        preview_image="https://cdn1.epicgames.com/ue/product/Screenshot/HighresScreenshot00006-1920x1080-959e0060137ee1d2d0765272de432338.png?resize=1&w=1920",
        city="San Francisco",
        state="CA")

    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
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
