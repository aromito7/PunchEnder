from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Reward, db
from datetime import datetime
from app.forms import RewardsForm
import json

reward_routes = Blueprint('rewards', __name__)

# Get all rewards


@reward_routes.route('/')  # @login_required
def get_all_rewards():
    rewards = Reward.query.all()
    return {'rewards': [reward.to_dict() for reward in rewards]}

# Get all rewards for a project


@reward_routes.route('/projects/<id>')
def get_rewards_by_project(id):
    rewards = Reward.query.filter(Reward.project_id == id).all()
    return {'rewards': [reward.to_dict() for reward in rewards]}

# Get specific reward


@reward_routes.route('/<id>')
def get_reward_by_id(id):
    rewards = Reward.query.filter(Reward.id == id).all()
    return {'rewards': [reward.to_dict() for reward in rewards]}




#Create new reward
@reward_routes.route('/projects/<int:id>', methods=["POST"])
def create_new_reward(id):
    data = json.loads(request.data.decode("utf-8"))
    [yyyy, mm, dd] = data['shipping_date'].split('-')
    data['shipping_date'] = datetime(int(yyyy), int(mm), int(dd))
    print(data)
    new_reward = Reward(
        project_id=id,
        name=data['name'],
        description=data['description'],
        price_threshold=data['price_threshold'],
        shipping_date=data['shipping_date'], #(datetime.now() + timedelta(days=30)).isoformat(),
        includes= data['includes'],
        ships_to=data['ships_to'],
        quantity=data['quantity'],
    )
    print("NEW REWARD --------------> ", new_reward)
    print(new_reward.shipping_date)
    db.session.add(new_reward)
    db.session.commit()

    return {'new reward' : new_reward.to_dict()}
