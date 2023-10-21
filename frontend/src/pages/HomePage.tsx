import Layout from '../components/Layout/Layout'
import MovieSearchResult from '../features/MovieSearchResult/MovieSearchResult'
import MovieSearchHeader from '../features/MovieSearchHeader/MovieSearchHeader'

export default function HomePage() {
  return (
    <Layout>
      <MovieSearchHeader />
      <MovieSearchResult />
    </Layout>
  )
}
