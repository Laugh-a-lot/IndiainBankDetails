from django.conf.urls import url
from django.urls import path
from django.urls.conf import include
from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.index)
]
