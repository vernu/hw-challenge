import httpClient from './httpClient'

export interface GenreEntity {
  id: number
  name: string
}

export interface MovieEntity {
  id: number
  title: string
  image: string
  genres: GenreEntity[]
  director: string
  duration: number
  year: number
  rating: number
  overview: string
  actors?: null
}

export interface MovieSearchResponsePayload {
  page: number
  results: MovieEntity[]
  total: number
}

class MovieApi {
  constructor() {}

  async searchMovies(query: string): Promise<MovieSearchResponsePayload> {
    const res = await httpClient.get('/movies/', {
      params: {
        search: query,
      },
    })
    return res.data
  }

  async getMovieById(id: number): Promise<MovieEntity> {
    const res = await httpClient.get(`/movies/${id}`)
    return res.data
  }
}

export const movieApi = new MovieApi()
