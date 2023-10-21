from rest_framework.response import Response
from rest_framework.views import APIView
from .models.Movie import Movie
from .serializers import MovieSerializer

from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.pagination import PageNumberPagination

class StandardPagination(PageNumberPagination):
    page_size = 12
    page_query_param = 'p'
    def get_paginated_response(self, data):
        return Response({
            'next': self.page.next_page_number() if self.page.has_next() else None,
            'previous': self.page.previous_page_number() if self.page.has_previous() else None,
            'current': self.page.number,
            'count': self.page.paginator.count,
            'pages': self.page.paginator.num_pages,
            'results': data,
        })

class MovieListView(ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    pagination_class = StandardPagination

    def get_queryset(self):
        queryset = Movie.objects.all()
        search = self.request.query_params.get('query')
        if search:
            queryset = queryset.filter(title__icontains=search)
        return queryset




class MovieDetailView(RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    lookup_field = 'id'



