import Button from '@/components/Button/Button'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { searchMovies, selectMovieSearch } from '@/store/slices/movieSlice'
import { useCallback, useMemo } from 'react'

export default function Pagination() {
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

  return (
    <div className='flex flex-row justify-between'>
      <div className=''>
        Showing {firstItem} to {lastItem} of {count} results
      </div>
      <div className='flex flex-row justify-between gap-2'>
        <Button onClick={handlePrevious} disabled={!previous}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={!next}>
          Next
        </Button>
      </div>
    </div>
  )
}
