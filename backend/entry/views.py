from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from entry.models import Entry
from entry.serializers import EntrySerializer

class ListCreateEntryView(ListCreateAPIView):
    """
        get:
        Get a List of all entries.

        Get a List of all entries made by any user.

        post:
        Create a new entry

        Create a new entry.
        """
    permission_classes = []

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return EntrySerializer
        return EntrySerializer

    def get_queryset(self):
        # can be ordered here or in a Meta Class in the model
        return Entry.objects

    def perform_create(self, serializer):
        serializer.save(worker=self.request.user)