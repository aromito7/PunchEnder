from flask import Blueprint
from ..models import db, Project, User, Reward, backing_table
from ..forms import ProjectForm
from flask_login import current_user

project_routes = Blueprint('projects', __name__)

# GET all projects


@project_routes.route('/')
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


@project_routes.route('/<int:id>/rewards/<int:reward_id>', methods=["POST"])
def create_backing(reward_id, id):
    """
    Create a backing for a project based on reward_id
    """
    user = current_user
    reward = Reward.query.get(reward_id)

    user.reward.append(reward)

    db.session.commit()

    return {"message": "backing added"}


@project_routes.route('/<int:id>/rewards/<int:reward_id>', methods=["PUT"])
def update_backing(reward_id, id):
    """
    Update a backing for a project based on the user_id of a backing
    """
    user = current_user
    reward = Reward.query.get(reward_id)

    # previous_backing_index = user.reward.index(user.id)

    for backing in reward.user:
        if backing.id == user.id:
            del backing

    user.reward.append(reward)

    db.session.commit()

    return {"message": "backing updated"}


@project_routes.route('/<int:id>/rewards/<int:reward_id>', methods=["DELETE"])
def delete_backing(reward_id, id):
    """
    Delete a backing for a project based on the user_id of the backing
    """
    user = current_user
    reward = Reward.query.get(reward_id)

    for backing in reward.user:
        if backing.id == user.id:
            del reward.user[reward.user.index(backing)]

    db.session.commit()

    return {"message": "backing deleted"}
