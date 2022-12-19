from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from sqlalchemy import ForeignKey
from .backing import backing_table


class Reward(db.Model):
    __tablename__ = 'rewards'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    project_id = db.Column(db.Integer, ForeignKey(
        add_prefix_for_prod('projects.id')), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price_threshold = db.Column(db.Integer, nullable=False)
    shipping_date = db.Column(db.DateTime, nullable=False)
    ships_to = db.Column(db.String(50), nullable=False)
    project = db.relationship('Project', back_populates='reward')
    user = db.relationship(
        'User', secondary=backing_table, back_populates='reward')
    includes = db.Column(db.String(500))
    description = db.Column(db.String(50000), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'project_id': self.project_id,
            'name': self.name,
            'quantity': self.quantity,
            'price_threshold': self.price_threshold,
            'shipping_date': self.shipping_date,
            'description': self.description,
            'includes': self.includes,
            'ships_to': self.ships_to,
            'users': len(self.user),
            'project': {'name': self.project.name,
                        'preview_image': self.project.preview_image}
        }
