import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface MovieEntity {
  id: number
  title: string
  poster_path: string
}

interface MovieDetailState {
  loading: boolean
  data: MovieEntity | null
  error: string | null
}

interface MovieSearchState {
  query: string
  loading: boolean
  error: string | null
  data: MovieEntity[]
  page: number
  totalResults: number
  totalPages: number
  nextPage: number | null
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
    data: [],
    page: 1,
    totalResults: 0,
    totalPages: 0,
    nextPage: null,
  },
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.search.query = action.payload
    },
  },
  extraReducers: (builder) => {},
})

export const { updateSearchQuery } = movieSlice.actions

export const selectMovieSearch = (state: RootState) => state.movie.search

export const selectMovieDetail = (state: RootState) => state.movie.detail

export default movieSlice
