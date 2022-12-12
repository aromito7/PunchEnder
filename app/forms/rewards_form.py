from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, DateField, IntegerField, DateField, TextAreaField, SelectField
from wtforms.validators import DataRequired, ValidationError, URL
from datetime import date
import re

class RewardsForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    quantity = IntegerField('quantity', validators=[DataRequired()])
    price_threshold = IntegerField('price_threshold', validators=[DataRequired()])
    shipping_date = DateField('shipping_date', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    ships_to = SelectField('ships_to', choices=["United States", "Anywhere in the world"], validators=[DataRequired()])
    includes = StringField('includes', validators=[DataRequired()])

    def validate_name(self, name):
        if len(name.data) > 50:
            raise ValidationError('Name must be less than 50 characters')

    def validate_quantity(self, quantity):
        if quantity.data <= 0:
            raise ValidationError('Quantity must be a positive integer')

    def validate_price_threshold(self, price_threshold):
        if price_threshold.data <= 0:
            raise ValidationError('Price threshold must be a positve integer')


    #May want to change this to check if shipping date is after project end_date
    def validate_shipping_date(self, shipping_date):
        if date.now() > date(shipping_date.data):
            raise ValidationError('Shipping date must be in the future')

    def validate_description(self, description):
        if not (50 <= len(description.data) <= 50000):
            raise ValidationError('Description length must be between 50 and 50,000 characters')

    def validate_ships_to(self, ships_to):
        if ships_to not in ["United States", "Anywhere in the world"]:
            raise ValidationError("Ships to is not a valid option")

    def validate_contains(self, contains):
        if not re.search(r"^([0-9]+ [^,]*)?(, [0-9]+ [^,]*)*$", contains):
            raise ValidationError("Not valid items to contain")


    def to_dict(self):
        return{
            "name": self.name.data,
            "quantity": self.quantity.data,
            "price_threshold": self.price_threshold.data,
            "shipping_date": self.shipping_date.data,
            "description": self.description.data,
        }
