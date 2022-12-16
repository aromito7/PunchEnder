from flask import Blueprint, request, jsonify
from ..models import db, Project, User, Reward, backing_table
from ..forms import ProjectForm, SearchForm
from datetime import datetime, timedelta
from flask_login import current_user, login_required


backings_route = Blueprint('backings', __name__)


@backings_route.route('/user/<int:user_id>')
@login_required
def get_user_backings(user_id):
    """
    Query for current logged in user's backings by user id
    """
    user = User.query.get(user_id)
    user_backings = user.reward
    if len(user_backings) < 1:
        return {"message": "no backings found"}

    user_backings_list = []

    for i, backing in enumerate(user_backings):
        backing_obj = {}

        reward = Reward.query.get(backing.id)
        project = Project.query.get(reward.project_id)
        backing_obj["id"] = i
        backing_obj["project_id"] = reward.project_id
        backing_obj["project_name"] = project.name
        backing_obj["backing_value"] = reward.price_threshold
        backing_obj["reward"] = reward.name
        backing_obj["image"] = project.preview_image
        backing_obj["reward_id"] = reward.id
        print(project.preview_image)

        user_backings_list.append(backing_obj)

    return {"backings": user_backings_list}


@backings_route.route('/project/<int:project_id>', methods=["POST"])
@login_required
def create_backing(project_id):
    """
    Create a backing for a project based on reward_id
    """
    body = request.get_json()

    user = current_user
    reward = Reward.query.get(body["rewardId"])
    user.reward.append(reward)

    db.session.commit()

    backing_obj = {}

    reward = Reward.query.get(reward_id)
    project = Project.query.get(id)
    backing_obj["project_id"] = reward.project_id
    backing_obj["project_name"] = project.name
    backing_obj["backing_value"] = reward.price_threshold
    backing_obj["reward"] = reward.name
    backing_obj["image"] = project.preview_image
    backing_obj["reward_id"] = reward.id

    print("ADD BACKING ---->", backing_obj)
    return backing_obj
    # return {"message": "Backing successfully created"}


@backings_route.route('/project/<int:project_id>', methods=["PUT"])
@login_required
def update_backing(project_id):
    """
    Update a backing for a project based on the user_id of a backing
    """
    body = request.get_json()

    user = current_user

    prev_reward = Reward.query.get(body["prevRewardId"])
    user.reward.remove(prev_reward)
    # prev_reward.user.remove("prevRewardId")

    new_reward = Reward.query.get(body["newRewardId"])
    user.reward.append(new_reward)

    db.session.commit()

    return {"message": "Backing successfully created"}


@backings_route.route('/project/<int:project_id>', methods=["DELETE"])
def delete_backing(project_id):
    """
    Delete a backing for a project based on the user_id of the backing
    """

    body = request.get_json()
    user = current_user

    reward = Reward.query.get(body["rewardId"])
    user.reward.remove(reward)
    print(reward.user)

    db.session.commit()

    project = Project.query.get(project_id)

    return {"message": "backing deleted", "project_name": project.name}
