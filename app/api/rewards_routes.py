from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Reward


reward_routes = Blueprint('rewards', __name__)


@reward_routes.route('/')
@login_required
def get_all_rewards():
    rewards = Reward.query.all()
    return {'rewards': [reward.to_dict() for reward in rewards]}