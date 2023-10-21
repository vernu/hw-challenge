import MovieDetail from '@/features/MovieDetail/MovieDetail'
import Layout from '../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { findMovieById, selectMovieDetail } from '@/store/slices/movieSlice'

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const { data } = useAppSelector(selectMovieDetail)

  useEffect(() => {
    if (!id) return
    dispatch(findMovieById(Number(id)))
  }, [dispatch, id])

  if (!data) {
    return null
  }

  return (
    <Layout>
      <MovieDetail movie={data} />
    </Layout>
  )
}
