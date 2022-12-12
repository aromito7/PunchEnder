from flask import Blueprint, request, jsonify
from ..models import db, Project, User
from ..forms import ProjectForm
from datetime import datetime, timedelta
from flask_login import current_user

project_routes = Blueprint('projects', __name__)

#GET all projects
@project_routes.route('/')
def getAllProjects():
    projects = Project.query.all()
    return {'projects': [project.to_dict() for project in projects]}

#GET a single project
@project_routes.route('/<int:id>')
def getProject(id):
    project = Project.query.get(id)
    if project is None:
        return {'error': 'Project not found'}
    return project.to_dict()

#DELETE a single project
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
@project_routes.route('/', methods=['POST'])
def create_project():
  form = ProjectForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    print('FORM -------------> ', form.data)
    print("USER OBJECT ------> ", current_user.get_id())
    new_project = Project(
      owner_id=current_user.get_id(),
      name=form.data['name'],
      goal_amount=form.data['goal_amount'],
      current_amount=form.data['current_amount'],
      end_date=datetime.now(),
      short_description=form.data["short_description"],
      long_description=form.data['long_description'],
      preview_image=form.data['preview_image'],
      city=form.data['city'],
      state=form.data['state']
    )
    print("NEW PROJECT --------------> ", new_project)
    print("END DATE -------------> ", new_project.end_date)
    db.session.add(new_project)
    db.session.commit()

    return new_project.to_dict()

# UPDATE a project
@project_routes.route('/<projectid>', methods=['PUT'])
def create_project():
  form = ProjectForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  the_project = db.session.query(projectid)
  if form.validate_on_submit():
    print('FORM -------------> ', form.data)
    print("USER OBJECT ------> ", current_user.get_id())
    new_project = Project(
      name=form.data['name'],
      goal_amount=form.data['goal_amount'],
      current_amount=form.data['current_amount'],
      end_date=datetime.now(),
      short_description=form.data["short_description"],
      long_description=form.data['long_description'],
      preview_image=form.data['preview_image'],
      city=form.data['city'],
      state=form.data['state']
    )
    print("NEW PROJECT --------------> ", new_project)
    print("END DATE -------------> ", new_project.end_date)
    db.session.add(new_project)
    db.session.commit()

    return new_project.to_dict()
