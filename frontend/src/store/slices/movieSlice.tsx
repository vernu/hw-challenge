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
  page: number
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
    page: 1,
    count: 0,
    next: null,
    previous: null,
  },
}

export const searchMovies = createAsyncThunk(
  'movie/searchMovies',
  async (payload: string, { rejectWithValue }) => {
    try {
      const res = await movieApi.searchMovies(payload)
      console.log(res)
      return res
    } catch (e) {
      console.log(e)
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
            ...state.search,
            loading: false,
            error: null,
            ...action.payload,
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
