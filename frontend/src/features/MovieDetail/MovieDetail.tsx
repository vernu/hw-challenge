import LoadingMovieDetail from '@/features/MovieDetail/components/LoadingMovieDetail'
import MovieDetailMainSection from './components/MovieDetailMainSection'
import MovieDetailBottomSection from './components/MovieDetailBottomSection'
import useMovieDetail from './hooks/useMovieDetail'

export default function MovieDetail() {
  const { data, loading } = useMovieDetail()

  return (
    <div className='flex flex-col justify-center items-center'>
      {loading && <LoadingMovieDetail />}
      {data && <MovieDetailMainSection movie={data} />}
      <MovieDetailBottomSection />
    </div>
  )
}
