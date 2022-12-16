from .db import db
from sqlalchemy.schema import Column, ForeignKey, Table


category_table = Table('project_categories',
                      db.Model.metadata,
                      Column("project_id", ForeignKey("projects.id"), primary_key=True),
                      Column("category_id", ForeignKey("categories.id"), primary_key=True))
