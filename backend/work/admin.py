from django.contrib import admin
from django.contrib.admin import ModelAdmin

from work.models import Work


class WorkAdmin(ModelAdmin):
    list_display = ["__str__"]


admin.site.register(Work, WorkAdmin)
