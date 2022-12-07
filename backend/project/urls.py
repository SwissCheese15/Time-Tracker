from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from project import settings
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('work/', include("work.urls")),
    path('entry/', include("entry.urls")),
]
