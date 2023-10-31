import { useState } from 'react'
import Input from '@/components/Input/Input'

import SearchingIndicator from './SearchingIndicator'
import MovieIcon from '@/components/icons/MovieIcon'
import TvSeriesIcon from '@/components/icons/TvSeriesIcon'
import SearchIcon from '@/components/icons/SearchIcon'
import useDebouncedMovieSearch from '../hooks/useDebouncedMovieSearch'
import { useAppSelector } from '@/store/hooks'
import { selectMovieSearch } from '@/store/slices/movieSlice'

export default function SearchMovieSection() {
  const { loading } = useAppSelector(selectMovieSearch)

  const [inputValue, setInputValue] = useState('')
  useDebouncedMovieSearch(inputValue)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center py-4'>
        <Input
          data-testid='search-movie-input'
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
