import { useEffect } from 'react'

import {
  searchMovies,
  selectMovieSearch,
  updateSearchQuery,
} from '@/store/slices/movieSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const DEBOUNCE_DELAY = 500

export default function useDebouncedMovieSearch(inputValue: string) {
  const dispatch = useAppDispatch()
  const { query } = useAppSelector(selectMovieSearch)

  useEffect(() => {
    const interval = setInterval(() => {
      if (inputValue && query !== inputValue) {
        dispatch(updateSearchQuery(inputValue))
        dispatch(
          searchMovies({
            query: inputValue,
          })
        )
      }
    }, DEBOUNCE_DELAY)
    return () => clearInterval(interval)
  }, [dispatch, inputValue, query])
}
