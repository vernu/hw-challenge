import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { selectMovieSearch, searchMovies } from '@/store/slices/movieSlice'
import { useCallback, useMemo } from 'react'

export default function useMoviePagination() {
  const { query, current, count, next, previous } =
    useAppSelector(selectMovieSearch)

  const dispatch = useAppDispatch()

  const handleNext = useCallback(() => {
    dispatch(
      searchMovies({
        query,
        page: current + 1,
      })
    )
  }, [dispatch, query, current])

  const handlePrevious = useCallback(() => {
    dispatch(
      searchMovies({
        query,
        page: current - 1,
      })
    )
  }, [dispatch, query, current])

  const firstItem = useMemo(() => {
    return (current - 1) * 12 + 1
  }, [current])

  const lastItem = useMemo(() => {
    return current * 12 > count ? count : current * 12
  }, [current, count])

  return {
    current,
    count,
    next,
    previous,
    firstItem,
    lastItem,
    handleNext,
    handlePrevious,
  }
}
