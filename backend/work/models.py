from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Work(models.Model):
    project_name = models.CharField(max_length=100, blank=True)
    customer = models.CharField(max_length=100, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    creator = models.ForeignKey(User, related_name="initialiser", on_delete=models.PROTECT, blank=True)



    def __str__(self):
        return f'ID {self.pk}: {self.project_name}'

    # class Meta:
    #     # can be ordered here or directly in the view
    #     ordering = ['-created']