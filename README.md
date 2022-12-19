# PunchEnder
PunchEnder is a clone of Kickstarter that allows users to create projects with funding goals and allows other users to show support by backing a
project in different pledge amounts and receive rewards when the funding goal is complete. It provides a simple interface for creating projects, rewards, and
allows users to add, edit, and delete any backings they've pledged.

## Wiki
* [User Stories](https://github.com/aromito7/PunchEnder/wiki/User-Stories)
* [Database Schema](https://github.com/aromito7/PunchEnder/wiki/Database-Diagram)
* [Feature List](https://github.com/aromito7/PunchEnder/wiki/Features)
* [Redux Store Shape](https://github.com/aromito7/PunchEnder/wiki/Redux-Store-Shape)

## Built With:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

# Features

## Projects
View all Projects that are live on the site or by category:

![view-projects](https://i.imgur.com/FJtpHNe.png)
![project-categories](https://i.imgur.com/pv6ijsB.png)

View a projects details and rewards:

![view-projects-details](https://i.imgur.com/AfwChFJ.png)
![project-reward-details](https://i.imgur.com/tLnNnSp.png)

Create a new project:

![create-project](https://i.imgur.com/Due0Y2K.png)

Delete a project:

![delete-project](https://i.imgur.com/TjoGfD5.png)

## Backings
View projects you back:

![view-backings](https://i.imgur.com/FJtpHNe.png)

Create a new backing by selecting a reward:

![new-backings](https://i.imgur.com/o0BjI5C.png)

Edit a backing:

![edit-backing](https://i.imgur.com/Ag1ssjf.png)
![edit-backing2](https://i.imgur.com/lfESaC9.png)

Delete a backing:

![delete-backing](https://i.imgur.com/Ag1ssjf.png)

## Rewards

Add rewards to a project:

![add-rewards](https://i.imgur.com/sLknovz.png)

![get-rewards](https://i.imgur.com/7NRFFO0.png)

## Search

Search for projects:

![search](https://i.imgur.com/Q8fZujg.png)
![search2](https://i.imgur.com/Qe8M1UL.png)

# Future Offerings
*
*
*


# Setup
* Clone repo [here](https://github.com/aromito7/PunchEnder)
* CD into the app directory and run `pipenv install` to install back-end dependencies
* Run `flask db upgrade` to run migrations and `flask seed all` to seed database
* Run `flask run` to start server
* CD in the react-app directory and run `npm install` to install front-end dependencies
* Run `npm start`
