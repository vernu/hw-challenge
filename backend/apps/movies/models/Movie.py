from django.db import models
from .Genre import Genre


class Movie(models.Model):
    title = models.CharField(max_length=200)
    image = models.TextField()
    director = models.CharField(max_length=200)
    genres = models.ManyToManyField(Genre)
    duration = models.IntegerField()
    rating = models.FloatField()
    overview = models.TextField()
    year = models.IntegerField()
    actors = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'Movies'