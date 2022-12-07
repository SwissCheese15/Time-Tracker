from django.urls import path

from entry.views import ListCreateEntryView

urlpatterns = [
    path("", ListCreateEntryView.as_view())
]

