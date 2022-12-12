from flask import Blueprint
from ..models import db, Project, User
from ..forms import ProjectForm

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
