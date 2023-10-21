import { MovieEntity } from '../../../services/movieApi'

interface MoviesListViewProps {
  results: MovieEntity[]
}

export default function MoviesListView({ results }: MoviesListViewProps) {
  console.log(results)
  return <div>List View</div>
}
