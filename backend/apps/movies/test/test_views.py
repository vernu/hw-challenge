from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from apps.movies.models.Movie import Movie
from apps.movies.models.Genre import Genre


class MovieListViewTests(APITestCase):
    def setUp(self):
        genre1 = Genre.objects.create(name='Action')
        genre2 = Genre.objects.create(name='Sci-Fi')
        movie1 = Movie.objects.create(id=1, title='The Matrix', year=1999, duration=120, rating=7)
        movie1.genres.add(genre1)
        movie2 = Movie.objects.create(id=2, title='Avatar', year=2009, duration=160, rating=8.5)
        movie2.genres.add(genre1, genre2)

    def test_movie_list_view_without_search_query(self):
        url = reverse('movie-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 2)
        self.assertEqual(response.data['current'], 1)
        self.assertEqual(response.data['next'], None)
        self.assertEqual(response.data['previous'], None)
        self.assertEqual(len(response.data['results']), 2)

    def test_movie_list_view_with_search_query(self):
        url = reverse('movie-list')
        response = self.client.get(url, {'query': 'Matrix'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 1)
        self.assertEqual(response.data['current'], 1)
        self.assertEqual(response.data['next'], None)
        self.assertEqual(response.data['previous'], None)
        self.assertEqual(len(response.data['results']), 1)
        self.assertEqual(response.data['results'][0]['title'], 'The Matrix')
        self.assertEqual(response.data['results'][0]['genres'][0]['name'], 'Action')
        self.assertEqual(response.data['results'][0]['year'], 1999)
        
    def test_movie_detail_view(self):
        url = reverse('movie-detail', args=[2])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Avatar')
        self.assertEqual(response.data['year'], 2009)
        self.assertEqual(len(response.data['genres']), 2)