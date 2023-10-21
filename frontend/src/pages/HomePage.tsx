import Layout from '../components/Layout/Layout'
import MovieList from '../features/MovieSearchResult/MovieSearchResult'
import MovieSearchHeader from '../features/MovieSearchHeader/MovieSearchHeader'


export default function HomePage() {
  return (
    <Layout>
      <MovieSearchHeader />
      <MovieList />
    </Layout>
  )
}
