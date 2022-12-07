from django.contrib import admin
from django.contrib.admin import ModelAdmin

from entry.models import Entry


class EntryAdmin(ModelAdmin):
    list_display = ["__str__"]


admin.site.register(Entry, EntryAdmin)
