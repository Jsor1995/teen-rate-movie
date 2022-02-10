#!/bin/sh
source $(pipenv --venv)/bin/activate
python manage.py runserver
