from django.urls import path

from work.views import ListCreateWorkView

urlpatterns = [
    path("work", ListCreateWorkView.as_view())
]

