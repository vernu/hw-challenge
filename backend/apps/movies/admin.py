from django.contrib import admin
from .models.Genre import Genre
from .models.Movie import Movie

admin.site.register(Genre)
admin.site.register(Movie)
