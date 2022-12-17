from .db import db, environment, add_prefix_for_prod, SCHEMA
from sqlalchemy.schema import Column, ForeignKey, Table


category_table = Table('project_categories',
                      db.Model.metadata,
                      Column("project_id", ForeignKey(("projects.id")), primary_key=True),
                      Column("category_id", ForeignKey(("categories.id")), primary_key=True))

if environment == "production":
    category_table.schema = SCHEMA
