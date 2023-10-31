from rest_framework.test import APITestCase
from apps.movies.models.Movie import Movie
from apps.movies.models.Genre import Genre
from apps.movies.serializers import MovieSerializer


class MovieSerializerTests(APITestCase):
    def test_movie_serializer(self):
        genre1 = Genre.objects.create(name='Action')
        genre2 = Genre.objects.create(name='Comedy')
        
        movie = Movie.objects.create(title='The Matrix', year=1999, duration=120, rating=7)
        movie.genres.add(genre1, genre2)
        serializer = MovieSerializer(movie)
      
        self.assertEqual(serializer.data['title'], 'The Matrix')
        self.assertEqual(serializer.data['year'], 1999)
        self.assertEqual(len(serializer.data['genres']), 2)