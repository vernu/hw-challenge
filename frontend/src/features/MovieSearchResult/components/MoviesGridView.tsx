import { MovieEntity } from '@/services/movieApi'
import MovieGridCard from './MovieGridCard'

interface MoviesGridViewProps {
  results: MovieEntity[]
}

export default function MoviesGridView({ results }: MoviesGridViewProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
      {results.map((movie) => (
        <MovieGridCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
