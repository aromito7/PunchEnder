from .db import db
from datetime import datetime
from sqlalchemy import ForeignKey

class Project(db.Model):
  __tablename__ = 'projects'
  id = db.Column(db.Integer, primary_key=True)
  owner_id = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
  name = db.Column(db.String(50), nullable=False)
  goal_amount = db.Column(db.Integer, nullable=False)
  current_amount = db.Column(db.Integer, nullable=False)
  start_date = db.Column(db.DateTime, nullable=False, default=datetime.now())
  end_date = db.Column(db.DateTime, nullable=False)
  short_description = db.Column(db.String(250), nullable=False)
  long_description = db.Column(db.String(50000), nullable=False)
  preview_image = db.Column(db.String(100), nullable=False)
  city = db.Column(db.String(50), nullable=False)
  state = db.Column(db.String(2), nullable=False)

  owner = db.relationship('User', back_populates='project')
  reward = db.relationship('Reward', back_populates='project', cascade="all, delete")

  # Add relationships for backings

  def to_dict(self):
    return {
      'id': self.id,
      'owner_id': self.owner_id,
      'name': self.name,
      'goal_amount': self.goal_amount,
      'current_amount': self.current_amount,
      'start_date': self.start_date.isoformat(),
      'end_date': self.end_date.isoformat(),
      'short_description': self.short_description,
      'long_description': self.long_description,
      'preview_image': self.preview_image,
      'city': self.city,
      'state': self.state,
      'rewards': [r.to_dict() for r in self.reward]
    }
