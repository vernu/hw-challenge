import { Link } from 'react-router-dom'
import { MovieEntity } from '../../../services/movieApi'

interface MovieGridCardProps {
  movie: MovieEntity
}

export default function MovieGridCard({ movie }: MovieGridCardProps) {
  const { id, image, title, genres, rating, duration, year } = movie

  return (
    <Link to={`/movies/${id}`}>
      <div className='w- 48'>
        <div className=''>{year}</div>
        <img src={image} alt={title} />
        <div className=''>{title}</div>
        <div className='flex justify-between'>
          <div className=''>
            {genres.map(({ id, name }) => (
              <span key={id} className='m-2'>
                {name}
              </span>
            ))}
          </div>
          <div className=''>{duration} mins</div>
        </div>
        <div className=''>IMDb: {rating}</div>
      </div>
    </Link>
  )
}
