import { movieApi, MovieEntity, MovieSearchResponsePayload } from '../movieApi'
import httpClient from '../httpClient'

jest.mock('./httpClient')

describe('MovieApi', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('searchMovies', () => {
    it('should return movie search results', async () => {
      const query = 'action'
      const page = 1
      const expectedResponse: MovieSearchResponsePayload = {
        results: [
          {
            id: 1,
            title: 'Avatar',
            image: 'imageurl',
            genres: [],
            director: 'John Doe',
            duration: 120,
            year: 2023,
            rating: 8.0,
            overview: 'overview',
          },
        ],
        total: 2,
        next: null,
        previous: null,
        current: 1,
        count: 2,
        pages: 1,
      }
      const mockedHttpClient = jest
        .spyOn(httpClient, 'get')
        .mockResolvedValueOnce({ data: expectedResponse })

      const response = await movieApi.searchMovies({ query, page })

      expect(mockedHttpClient).toHaveBeenCalledWith('/movies/', {
        params: {
          query,
          p: page,
        },
      })
      expect(response).toEqual(expectedResponse)
    })
  })

  describe('findMovieById', () => {
    it('should return the correct movie ', async () => {
      const movieId = 1
      const expectedMovie: MovieEntity = {
        id: 1,
        title: 'Avatar',
        image: 'imageurl',
        genres: [],
        director: 'John Doe',
        duration: 120,
        year: 2023,
        rating: 8.0,
        overview: 'overview',
      }
      const mockedHttpClient = jest
        .spyOn(httpClient, 'get')
        .mockResolvedValueOnce({ data: expectedMovie })

      const movie = await movieApi.findMovieById(movieId)

      expect(mockedHttpClient).toHaveBeenCalledWith(`/movies/${movieId}`)
      expect(movie).toEqual(expectedMovie)
    })
  })
})
