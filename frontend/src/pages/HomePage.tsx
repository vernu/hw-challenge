import Layout from '@/components/Layout/Layout'
import MovieSearchHeader from '@/features/MovieSearchHeader/MovieSearchHeader'
import MovieSearchResult from '@/features/MovieSearchResult/MovieSearchResult'

export default function HomePage() {
  return (
    <Layout>
      <MovieSearchHeader />
      <MovieSearchResult />
    </Layout>
  )
}
