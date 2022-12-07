from django.contrib.auth import get_user_model
from django.db import models
from work.models import Work

User = get_user_model()


class Entry(models.Model):
    comment = models.CharField(max_length=100, blank=True)
    created_date = models.DateField(auto_now_add=True)
    time = models.IntegerField()
    worker = models.ForeignKey(User, related_name="task", on_delete=models.PROTECT, blank=True)
    work_project = models.ForeignKey(Work, related_name="task", on_delete=models.PROTECT, blank=True)


    def __str__(self):
        return f'ID {self.pk}: {self.comment}'

    # class Meta:
    #     # can be ordered here or directly in the view
    #     ordering = ['-created']