from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Reward, Project, backing_table

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>/backings')
@login_required
def get_user_backings(id):
    """
    Query for current logged in user's pledges by user id
    """
    user = User.query.get(id)
    # user_backings = backing_table.query(backing_table).filter(
    #     backing_table.user_id == id).all()
    print(dict(backing_table))
    user_backings = [
        backing for backing in backing_table if backing.user_id == id]
    user_backings_list = []

    for backing in user_backings:
        backing_obj = {}
        reward = Reward.query.get(backing.reward_id)
        project = Project.query.get(reward.project_id)
        backing_obj["project_name"] = project.name
        backing_obj["backing_value"] = reward.price_threshold
        user_backings_list.append(backing_obj)

    return {"backings": user_backings_list}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()
