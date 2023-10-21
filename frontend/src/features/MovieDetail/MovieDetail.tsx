import Button from '@/components/Button/Button'
import { MovieEntity } from '@/services/movieApi'
import { Link } from 'react-router-dom'
import ArrowIcon from '@/components/icons/ArrowIcon'

interface MovieDetailProps {
  movie: MovieEntity
}
export default function MovieDetail({ movie }: MovieDetailProps) {
  const { title, image, overview, genres, duration, rating, actors, director } =
    movie
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
      <div className=''>
        <img src={image} alt={title} />
      </div>

      <div className='md:col-span-2'>
        <h1 className=''>{title}</h1>
        <div className=''>{overview}</div>

        <div className='flex justify-between'>
          <div className=''>
            {genres.map(({ id, name }) => (
              <span key={id} className='m-2'>
                {name}
              </span>
            ))}
          </div>
          <div className=''>{duration} mins</div>
          <div className=''>IMDb: {rating}</div>
        </div>
        <hr />
        <div className='flex flex-col'>
          <div className=''>
            {' '}
            Director: <span className='font-bold'>{director}</span>
          </div>
          <div className=''>
            {' '}
            Actors:{' '}
            {actors?.split(',').map((actor) => (
              <div className='font-bold'>{actor}</div>
            ))}
          </div>
        </div>

        <div className=''>
          <Link to='/'>
            <Button icon={<ArrowIcon />}>Back to home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
