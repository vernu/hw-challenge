from django.urls import path
from .views import MovieListView, MovieDetailView

urlpatterns = [
    path('', MovieListView.as_view(), name='movie-list'),
    path('<int:id>/', MovieDetailView.as_view(), name='movie-detail'),
]