import { useEffect, useState } from 'react'
import Input from '@/components/Input/Input'

import {
  searchMovies,
  selectMovieSearch,
  updateSearchQuery,
} from '@/store/slices/movieSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import SearchingIndicator from './SearchingIndicator'
import MovieIcon from '@/components/icons/MovieIcon'
import TvSeriesIcon from '@/components/icons/TvSeriesIcon'
import SearchIcon from '@/components/icons/SearchIcon'

const DEBOUNCE_DELAY = 500

export default function SearchMovieSection() {
  const dispatch = useAppDispatch()
  const { query, loading } = useAppSelector(selectMovieSearch)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateSearchQuery(inputValue))
      if (inputValue && query !== inputValue) {
        dispatch(
          searchMovies({
            query: inputValue,
          })
        )
      }
    }, DEBOUNCE_DELAY)
    return () => clearInterval(interval)
  }, [dispatch, inputValue, query])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center py-4'>
        <Input
          value={inputValue}
          icon={<SearchIcon />}
          onChange={handleInputChange}
          placeholder='Search for your next movie'
        />
      </div>

      <div className='flex flex-row justify-center items-center gap-8'>
        <div className='flex flex-row justify-center items-center gap-2'>
          <span className='w-5 fill-primary'>
            <MovieIcon />
          </span>
          <span>Movies</span>
        </div>

        <div className='flex flex-row justify-center items-center gap-2'>
          <span className='w-5 fill-primary'>
            <TvSeriesIcon />
          </span>
          <span>Tv Series</span>
        </div>
      </div>

      {loading && <SearchingIndicator />}
    </>
  )
}
