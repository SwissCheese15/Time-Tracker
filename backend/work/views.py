from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from work.models import Work
from work.serializers import WorkSerializer

class ListCreateWorkView(ListCreateAPIView):
    """
        get:
        Get a List of all work projects

        Get a List of all work projects made by any user.

        post:
        Create a new work project

        Create a new work project.
        """
    permission_classes = []

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return WorkSerializer
        return WorkSerializer

    def get_queryset(self):
        # can be ordered here or in a Meta Class in the model
        return Work.objects.order_by("-created")

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)