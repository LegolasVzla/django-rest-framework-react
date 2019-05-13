from django.shortcuts import render
import logging

# Create your views here.
def index(request):
	logging.getLogger("info_logger").info("Welcome Home %s" % request)
	return render(request, 'frontend/index.html')