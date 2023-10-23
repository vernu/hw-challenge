import { Link } from 'react-router-dom'
import { MovieEntity } from '@/services/movieApi'
import StarIcon from '@/components/icons/StarIcon'

interface MovieListCardProps {
  movie: MovieEntity
}

export default function MovieListCard({ movie }: MovieListCardProps) {
  const { id, image, title, genres, rating, duration, year } = movie

  return (
    <Link to={`/movies/${id}`} className='hover:scale-105 duration-300'>
      <div className='grid grid-cols-3 lg:grid-cols-4'>
        <div className=''>
          <img src={image} alt={title} className='h-32 lg:h-48' />
        </div>

        <div className='col-span-2 lg:grid-cols-3 flex flex-col justify-between py-6'>
          <div className='flex justify-between'>
            <span className='text-sm'>{year}</span>
            <div className='flex flex-row justify-center text-xs'>
              <span className='mr-1'> IMDb:</span>
              <span className='fill-primary w-4'>
                <StarIcon />
              </span>
              <span className='bold'>{rating}</span>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='text-secondary uppercase'>{title}</div>
            <div className=''>
              <div className='flex clear-right text-xs gap-2'>
                {genres.slice(0, 3).map(({ id, name }) => (
                  <span key={id} className=''>
                    {name}
                  </span>
                ))}
                <span className='text-secondary'>•</span>
                <span className=''>{duration} mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
