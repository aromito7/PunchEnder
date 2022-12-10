from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Reward, Project

backing_routes = Blueprint('backings', __name__)
