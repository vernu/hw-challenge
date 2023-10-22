import MovieDetail from '@/features/MovieDetail/MovieDetail'
import Layout from '../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { findMovieById, selectMovieDetail } from '@/store/slices/movieSlice'
import LoadingMovieDetail from '@/features/MovieDetail/LoadingMovieDetail'

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const { data, loading } = useAppSelector(selectMovieDetail)

  useEffect(() => {
    if (!id) return
    dispatch(findMovieById(Number(id)))
  }, [dispatch, id])

  return (
    <Layout>
      {loading && <LoadingMovieDetail />}
      {data && <MovieDetail movie={data} />}
    </Layout>
  )
}
