import { MovieEntity } from '@/services/movieApi'
import MovieListCard from './MovieListCard'

interface MoviesListViewProps {
  results: MovieEntity[]
}

export default function MoviesListView({ results }: MoviesListViewProps) {
  return (
    <div
      className='grid grid-cols-1 md:grid-cols-2 gap-6'
      data-testid='movies-list-view'
    >
      {results.map((movie) => (
        <MovieListCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
