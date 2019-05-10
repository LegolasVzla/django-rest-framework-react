This is my own django repository
------------------------

djangoreactAnimalRescue
------------------------
This is a basic django project to show the integration with rest-framework, react and redux.

Create your virtualenv and install the requirements:

	virtualenv virtual_name --python=python3
	source virtual_name/bin/activate

	pip install -r requirements.txt

Run the migrations:

	python manage.py makemigrations

	python manage.py migrate

Run the server:

	python manage.py runserver

You could see the home page in:

	http://127.0.0.1:8000/

And the API typing in your browser the URL:

	http://127.0.0.1:8000/api/animals

Where **animals** is the Model. This endpoint has been defined in the **animals/urls** app. It's possible to get/post/ data stored in the **animals** (or other model that you've defined). Also you can add new elements and check the json response.

See more about Django rest framework in the documentation below:

	https://www.django-rest-framework.org/

Contributions
------------------------

All work to improve performance is good

Enjoy it!
