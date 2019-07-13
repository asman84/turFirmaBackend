from django.shortcuts import render

from home.models import *


def home(request):
    navs = Nav.objects.all()
    navDropdowns = NavDropdown.objects.all()
    return render(request, 'home/boshSahifa.html', {'navbar': navs, 'navDropdown': navDropdowns})
