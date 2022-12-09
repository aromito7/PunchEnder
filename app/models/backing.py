from .db import db
from sqlalchemy.schema import Column, ForeignKey, Table

backing_table = Table('backings',
  Column("user_id", ForeignKey("users.id"), primary_key=True),
  Column("reward_id", ForeignKey("rewards.id"), primary_key=True))
