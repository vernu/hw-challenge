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
  results: MovieEntity[]
  total: number
  next: number | null
  previous: number | null
  current: number
  count: number
  pages: number
}

class MovieApi {
  constructor() {}

  async searchMovies({
    query,
    page = 1,
  }: {
    query: string
    page: number
  }): Promise<MovieSearchResponsePayload> {
    const res = await httpClient.get('/movies/', {
      params: {
        query,
        p: page,
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
