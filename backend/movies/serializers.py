from rest_framework import serializers
from .models.Movie import Movie
from .models.Genre import Genre

class GenreSerializer(serializers.ModelSerializer):
  class Meta:
    model = Genre
    fields = ('id', 'name')

class MovieSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True)
    class Meta:
        model = Movie
        fields = '__all__'

