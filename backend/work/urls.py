from django.urls import path

from work.views import ListCreateWorkView

urlpatterns = [
    path("", ListCreateWorkView.as_view())
]

