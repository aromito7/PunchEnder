from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Reward
from app.forms import RewardsForm

reward_routes = Blueprint('rewards', __name__)

#Get all rewards
@reward_routes.route('/') #@login_required
def get_all_rewards():
    rewards = Reward.query.all()
    return {'rewards': [reward.to_dict() for reward in rewards]}

#Get all rewards for a project
@reward_routes.route('/projects/<id>')
def get_rewards_by_project(id):
    rewards = Reward.query.filter(Reward.project_id == id).all()
    return {'rewards': [reward.to_dict() for reward in rewards]}

#Get specific reward
@reward_routes.route('/<id>')
def get_reward_by_id(id):
    rewards = Reward.query.filter(Reward.id == id).all()
    return {'rewards': [reward.to_dict() for reward in rewards]}

#Create new rewawrd
@reward_routes.route('/projects/<int:id>/new', methods=["GET"])
def create_new_reward(id):
    form = RewardsForm()
    return 
