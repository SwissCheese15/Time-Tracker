from django.contrib.auth import get_user_model
from rest_framework import serializers

from entry.models import Entry

User = get_user_model()


class EntrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Entry
        fields = '__all__'

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     representation['owner'] = RepresentationUserSerializer(instance.owner, many=False).data
    #     return representation