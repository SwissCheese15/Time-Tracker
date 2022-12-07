from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from .models import User


from.serializers import UserSerializer

# For more info on Generic Views and Concrete Views check recipes.view


class ListCreateUserView(ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class RetrieveUpdateDestroyUserView(RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


