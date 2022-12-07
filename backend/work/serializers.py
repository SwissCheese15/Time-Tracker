from django.contrib.auth import get_user_model
from rest_framework import serializers

from work.models import Work

User = get_user_model()


class WorkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Work
        fields = '__all__'

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     representation['owner'] = RepresentationUserSerializer(instance.owner, many=False).data
    #     return representation