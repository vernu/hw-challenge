import { useAppSelector } from '@/store/hooks'
import { selectMovieSearch } from '@/store/slices/movieSlice'
import MoviesGridView from './/MoviesGridView'
import MoviesListView from './/MoviesListView'
import { LayoutType } from '../enums'
import ToggleLayoutType from './/ToggleLayoutType'
import TotalResults from './TotalResults'
import Pagination from './Pagination'
import NoResultsFound from './NoResultsFound'
import useMovieLayout from '../hooks/useMovieLayout'

export default function MovieSearchResult() {
  const { results, count, query, loading } = useAppSelector(selectMovieSearch)

  const { layoutType, setLayoutType } = useMovieLayout()

  if (!query || loading) return null

  if (query && results?.length === 0) return <NoResultsFound query={query} />

  return (
    <div className=''>
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
