from django.shortcuts import render


def index(request):
    template = 'mainapp/index.html'
    context = {}
    return render(request, template, context)
