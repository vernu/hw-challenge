import { useEffect, useState } from 'react'
import Input from '@/components/Input/Input'

import {
  searchMovies,
  selectMovieSearch,
  updateSearchQuery,
} from '@/store/slices/movieSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const DEBOUNCE_DELAY = 2000

export default function SearchMovieSection() {
  const dispatch = useAppDispatch()
  const { query } = useAppSelector(selectMovieSearch)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateSearchQuery(inputValue))
      if (inputValue && query !== inputValue) {
        dispatch(searchMovies(inputValue))
      }
    }, DEBOUNCE_DELAY)
    return () => clearInterval(interval)
  }, [dispatch, inputValue, query])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Search for your next movie'
        />
      </div>

      <div className='flex flex-row justify-center items-center'>
        <span>Movies</span>
        {' | '}
        <span>Series</span>
      </div>
    </>
  )
}
