from .db import db
from datetime import datetime
from .backing import backing_table
from sqlalchemy import ForeignKey


class Reward(db.Model):
  __tablename__ = 'rewards'

  id = db.Column(db.Integer, primary_key=True, nullable=False)
  project_id = db.Column(db.Integer, ForeignKey('projects.id'), nullable=False)
  name = db.Column(db.String(50), nullable=False)
  quantity = db.Column(db.Integer, nullable=False)
  price_threshold = db.Column(db.Integer, nullable=False)
  shipping_date = db.Column(db.DateTime, nullable=False)
  description = db.Column(db.String(50000), nullable=False)
  project = db.relationship('Project', back_populates='reward')
  user = db.relationship('User', secondary=backing_table, back_populates='reward')

  def to_dict(self):
    return {
      'id': self.id,
      'project_id': self.project_id,
      'name': self.name,
      'quantity': self.quantity,
      'price_threshold': self.price_threshold,
      'shipping_date': self.shipping_date,
      'description': self.description
    }
