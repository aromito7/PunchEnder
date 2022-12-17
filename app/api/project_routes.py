from flask import Blueprint, request, jsonify
from ..models import db, Project, User, Reward, backing_table, Category, category_table
from ..forms import ProjectForm, SearchForm
from datetime import datetime, timedelta
from flask_login import current_user
import json

project_routes = Blueprint('projects', __name__)

# GET all projects


@project_routes.route('/', strict_slashes=False)
def getAllProjects():
    projects = Project.query.all()
    return {'projects': [project.to_dict() for project in projects]}

# GET a single project


@project_routes.route('/<int:id>')
def getProject(id):
    project = Project.query.get(id)
    if project is None:
        return {'error': 'Project not found'}
    return project.to_dict()

# DELETE a single project


@project_routes.route('/<id>', methods=["DELETE"])
def deleteProject(id):
    project = Project.query.get(id)
    if project is not None:
        db.session.delete(project)
        db.session.commit()
        return {"deleted project id": id}
    else:
        return {"error": f'project id {id} not found'}

# CREATE a project


@project_routes.route('/create', methods=['POST'])
def create_project():
    data = json.loads(request.data.decode("utf-8"))
    # for key in data.keys():
    #form[key] = data[key]
    #print(key, data[key])
    new_project = Project(
        owner_id=current_user.get_id(),
        name=data['name'],
        goal_amount=data['goal_amount'],
        current_amount=data['current_amount'],
        start_date=datetime.now(),
        end_date=(datetime.now() + timedelta(days=30)),
        short_description=data['short_description'],
        long_description=data['long_description'],
        preview_image=data['preview_image'],
        city=data['city'],
        state=data['state']
    )
    print("NEW PROJECT --------------> ", new_project)
    print("END DATE -------------> ", new_project.end_date)
    db.session.add(new_project)
    db.session.commit()
    return new_project.to_dict()


# UPDATE a project


@project_routes.route('/<projectid>/update', methods=['PUT'])
def update_project(projectid):
    data = json.loads(request.data.decode("utf-8"))
    project = Project.query.get_id(projectid)
    for key in data.keys():
        #print(key, data[key])
        project[key] = data[key]

    print("Updated PROJECT --------------> ", project)
    db.session.commit()
    return project.to_dict()


@project_routes.route("/search/<query>")
def search(query):
    print("Hello, api")
    #searchParams = request.args.get()
    # print(searchParams)

    #query = searchParams("name")
    searchResults = Project.query.filter(
        Project.name.ilike(f"%{query}%")
    )
    results = [project.to_dict()
               for project in searchResults if project is not None]

    if not results:
        return {"message": "No search results were found."}

    return {'results': results}


@project_routes.route("/categories")
def get_categories():

    categories = Category.query.get().all

    allCategories = [category.to_dict() for category in categories]

    return {"categories": allCategories}
