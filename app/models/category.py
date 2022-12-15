from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .backing import backing_table
from .project_categories import category_table

class Category(db.Model, UserMixin):
    __tablename__ = 'categories'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    projects = db.relationship('Project', secondary=category_table, back_populates='categories')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'projects': [project.to_dict() for project in self.projects],
        }
