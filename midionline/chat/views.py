from tokenize import Double
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpRequest, JsonResponse, HttpResponseRedirect
from .GroupMeAPI import groupmeapi as grme

g = grme()


def index(request):
   
    return render(request, 'messages.html')
