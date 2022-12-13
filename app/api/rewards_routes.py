from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Reward, db
from datetime import datetime
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




#Create new reward
@reward_routes.route('/projects/<int:id>', methods=["POST"])
def create_new_reward(id):
    form = RewardsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print('FORM -------------> ', form.data)
        print("USER OBJECT ------> ", current_user.get_id())
        new_reward = Reward(
            name=form.data['name'],
            description=form.data['desctiption'],
            price_threshold=form.data['price_threshold'],
            shipping_date=form.data['shipping_date'], #(datetime.now() + timedelta(days=30)).isoformat(),
            includes= form.data['includes'],
            ships_to=form.data['ships_to'],
        )
        print("NEW REWARD --------------> ", new_reward)
        db.session.add(new_reward)
        db.session.commit()

        return new_reward.to_dict()
