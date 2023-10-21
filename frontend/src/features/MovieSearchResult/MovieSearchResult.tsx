import { useState } from 'react'
import { useAppSelector } from '@/store/hooks'
import { selectMovieSearch } from '@/store/slices/movieSlice'
import MoviesGridView from './components/MoviesGridView'
import MoviesListView from './components/MoviesListView'
import { LayoutType } from './enums'
import ToggleLayoutType from './components/ToggleLayoutType'
import TotalResults from './components/TotalResults'
import Pagination from './components/Pagination'

export default function MovieSearchResult() {
  const { results, count, query } = useAppSelector(selectMovieSearch)
  const [layoutType, setLayoutType] = useState<LayoutType>(LayoutType.GRID)

  if (!query) return null

  return (
    <div className='md:mx-16'>
      <div className='flex flex-row justify-between my-8'>
        <TotalResults count={count} />
        <ToggleLayoutType
          currentLayoutType={layoutType}
          onChange={setLayoutType}
        />
      </div>

      <div className=''>
        {layoutType === LayoutType.GRID && <MoviesGridView results={results} />}
        {layoutType === LayoutType.LIST && <MoviesListView results={results} />}
      </div>

      <div className='my-8'>
        <Pagination />
      </div>
    </div>
  )
}
