import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'
import {
  MovieEntity,
  MovieSearchResponsePayload,
  movieApi,
} from '@/services/movieApi'

interface MovieDetailState {
  loading: boolean
  data: MovieEntity | null
  error: string | null
}

interface MovieSearchState {
  query: string
  loading: boolean
  error: string | null
  results: MovieEntity[]
  pages: number
  current: number
  count: number
  next: number | null
  previous: number | null
}

interface MovieState {
  detail: MovieDetailState
  search: MovieSearchState
}

const initialState: MovieState = {
  detail: {
    loading: false,
    data: null,
    error: null,
  },
  search: {
    query: '',
    loading: false,
    error: null,
    results: [],
    pages: 0,
    current: 0,
    count: 0,
    next: null,
    previous: null,
  },
}

interface SearchMoviesParams {
  query: string
  page?: number
}
export const searchMovies = createAsyncThunk(
  'movie/searchMovies',
  async ({ query, page = 1 }: SearchMoviesParams, { rejectWithValue }) => {
    try {
      const res = await movieApi.searchMovies({
        query,
        page,
      })
      return res
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.search.query = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.search.loading = true
      })
      .addCase(
        searchMovies.fulfilled,
        (state, action: PayloadAction<MovieSearchResponsePayload>) => {
          state.search = {
            query: state.search.query,
            loading: false,
            error: null,
            current: action.payload.current,
            count: action.payload.count,
            next: action.payload.next,
            previous: action.payload.previous,
            pages: action.payload.pages,
            results: action.payload.results,
          }
        }
      )
      .addCase(searchMovies.rejected, (state, action) => {
        state.search.loading = false
        state.search.error = action.payload as string
      })
  },
})

export const { updateSearchQuery } = movieSlice.actions

export const selectMovieSearch = (state: RootState) => state.movie.search

export const selectMovieDetail = (state: RootState) => state.movie.detail

export default movieSlice
