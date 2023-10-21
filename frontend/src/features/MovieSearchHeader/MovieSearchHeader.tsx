import WelcomeSection from './components/WelcomeSection'
import SearchMovieSection from './components/SearchMovieSection'

export default function MovieSearchHeader() {
  return (
    <div className='my-24'>
      <WelcomeSection />
      <SearchMovieSection />
    </div>
  )
}
