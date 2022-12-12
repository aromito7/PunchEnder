from flask import Blueprint, jsonify, session
from flask_login import login_required, current_user
from app.models import User, Reward, Project

backing_routes = Blueprint('backings', __name__)


@backing_routes.route('/')
@login_required
def test_route():

    print("TEST!!!!!")

    return {"test": "test"}
