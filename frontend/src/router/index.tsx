import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import MovieDetailPage from '../pages/MovieDetailPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/movies/:id',
    element: <MovieDetailPage />,
  },
])

export default router
