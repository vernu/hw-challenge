import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  selectMovieDetail,
  findMovieById,
  resetMovieDetail,
} from '@/store/slices/movieSlice'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function useMovieDetail() {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const { data, loading } = useAppSelector(selectMovieDetail)

  useEffect(() => {
    if (id) dispatch(findMovieById(Number(id)))

    return () => {
      dispatch(resetMovieDetail())
    }
  }, [dispatch, id])

  return {
    data,
    loading,
  }
}
