from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField
from wtforms.validators import DataRequired, ValidationError, URL
from ..models import Project

class ProjectForm(FlaskForm):
    # owner_id should be based on the current user so not included
    name = StringField('name', validators=[DataRequired()])
    goal_amount = IntegerField('goal_amount', validators=[DataRequired()])
    # probably don't need current_amount in the form
    current_amount = IntegerField('current_amount', validators=[DataRequired()])
    start_date = DateField('start_date', validators=[DataRequired()])
    # end_date = DateField('end_date', validators=[DataRequired()], format='%Y-%m-%d')
    short_description = StringField('short_description', validators=[DataRequired()])
    long_description = StringField('long_description', validators=[DataRequired()])
    preview_image = StringField('preview_image', validators=[DataRequired(), URL()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])

    def validate_name(self, name):
        if len(name.data) < 50:
            raise ValidationError('Name must be less than 50 characters')
        name = Project.query.filter(Project.name == name.data).first()
        if name:
            raise ValidationError('Project name already exists')

    def validate_goal_amount(self, goal_amount):
        if goal_amount.data < 100:
            raise ValidationError('Goal amount must be at least $100')

    def validate_start_date(self, start_date):
        if start_date.data < datetime.now().date():
            raise ValidationError('Start date cannot be in the past')

    # def validate_end_date(self, end_date):
    #     if end_date.data < self.start_date.data:
    #         raise ValidationError('End date cannot be before start date')

    def validate_short_description(self, short_description):
        if len(short_description.data) > 250:
            raise ValidationError('Short description must be less than 250 characters')
        if len(short_description.data) < 50:
            raise ValidationError('Short description must be at least 50 characters')

    def validate_long_description(self, long_description):
        if len(long_description.data) > 50000:
            raise ValidationError('Long description must be less than 50000 characters')
        if len(long_description.data) < 100:
            raise ValidationError('Long description must be at least 100 characters')

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'goal_amount': self.goal_amount,
            'current_amount': self.current_amount,
            'start_date': self.start_date,
            'end_date': self.end_date,
            'short_description': self.short_description,
            'long_description': self.long_description,
            'preview_image': self.preview_image,
            'city': self.city,
            'state': self.state
        }
