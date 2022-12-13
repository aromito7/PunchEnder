from flask import Blueprint, request, jsonify
from ..models import db, Project, User, Reward, backing_table
from ..forms import ProjectForm
from datetime import datetime, timedelta
from flask_login import current_user

project_routes = Blueprint('projects', __name__)

# GET all projects


@project_routes.route('/')
def getAllProjects():
    projects = Project.query.all()
    print(projects)
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

    backing_obj = {}

    reward = Reward.query.get(reward_id)
    project = Project.query.get(id)
    backing_obj["project_name"] = project.name
    backing_obj["backing_value"] = reward.price_threshold

    return backing_obj


@project_routes.route('/<int:id>/rewards/<int:reward_id>', methods=["PUT"])
def update_backing(reward_id, id):
    """
    Update a backing for a project based on the user_id of a backing
    """
    user = current_user
    reward = Reward.query.get(reward_id)

    for backing in reward.user:
        if backing.id == user.id:
            del reward.user[reward.user.index(backing)]
        else:
            return {"Error": "Backing not found"}

    user.reward.append(reward)

    db.session.commit()

    backing_obj = {}

    reward = Reward.query.get(reward_id)
    project = Project.query.get(id)
    backing_obj["project_name"] = project.name
    backing_obj["backing_value"] = reward.price_threshold

    return {backing_obj}


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
        else:
            return {'Error': "Can't delete a backing that's not yours"}

    db.session.commit()

    project = Project.query.get(id)

    return {"message": "backing deleted", "project_name": project.name}

# CREATE a project


# @project_routes.route('/', methods=['POST'])
# def create_project():
#     form = ProjectForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         print('FORM -------------> ', form.data)

@project_routes.route('/create', methods=['POST'])
def create_project():
    form_data = request.form
    if form.validate_on_submit():
        print("USER OBJECT ------> ", current_user.get_id())
        new_project = Project(
            owner_id=current_user.get_id(),
            name=form.data['name'],
            goal_amount=form.data['goal_amount'],
            current_amount=form.data['current_amount'],
            end_date=(datetime.now() + timedelta(days=30)).isoformat(),
            short_description=form.data['short_description'],
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
    print(form.errors)
    return jsonify(form.errors)


# UPDATE a project


@project_routes.route('/<projectid>', methods=['PUT'])
def update_project(projectid):
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    updated_project = db.session.query(projectid)
    if form.validate_on_submit():
        print('FORM -------------> ', form.data)
        print("USER OBJECT ------> ", current_user.get_id())
        new_project = updated_project(
            name=form.data['name'],
            goal_amount=form.data['goal_amount'],
            current_amount=form.data['current_amount'],
            end_date=form.data['end_date'],
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

        return updated_project.to_dict()
