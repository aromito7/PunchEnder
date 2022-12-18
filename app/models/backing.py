from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.schema import Column, ForeignKey, Table


backing_table = Table('backings',
                      db.Model.metadata,
                      Column("user_id", ForeignKey(
                          add_prefix_for_prod("users.id")), primary_key=True),
                      Column("reward_id", ForeignKey(add_prefix_for_prod("rewards.id")), primary_key=True))

if environment == "production":
    backing_table.schema = SCHEMA
