import Button from '@/components/Button/Button'
import useMoviePagination from '../hooks/useMoviePagination'

export default function Pagination() {
  const {
    count,
    next,
    previous,
    firstItem,
    lastItem,
    handleNext,
    handlePrevious,
  } = useMoviePagination()

  return (
    <div className='flex flex-row justify-between'>
      <div className='flex flex-col md:flex-row gap-2'>
        <div className=''>
          Showing {firstItem} to {lastItem}
        </div>
        <div className=''>
          of <span className='text-primary'>{count}</span> results
        </div>
      </div>

      <div className='flex flex-row justify-between gap-2'>
        <Button
          onClick={handlePrevious}
          disabled={!previous}
          data-testid='previous-button'
        >
          Previous
        </Button>
        <Button onClick={handleNext} disabled={!next} data-testid='next-button'>
          Next
        </Button>
      </div>
    </div>
  )
}
