import { Link } from 'react-router-dom'
import { MovieEntity } from '@/services/movieApi'
import StarIcon from '@/components/icons/StarIcon'

interface MovieGridCardProps {
  movie: MovieEntity
}

export default function MovieGridCard({ movie }: MovieGridCardProps) {
  const { id, image, title, genres, rating, duration, year } = movie

  return (
    <Link to={`/movies/${id}`} className='hover:scale-105 duration-300'>
      <div className='flex flex-col gap-1'>
        <div className='relative'>
          <img src={image} alt={title} className='rounded-xl' />
          <div className='absolute top-8 left-0 flex items-center justify-center'>
            <span className='bg-dark text-light px-2 py-1 text-sm rounded-br-xl rounded-tr-xl'>
              {year}
            </span>
          </div>
        </div>
        <div className='text-center font-bold text-secondary truncate'>
          {title}
        </div>
        <div className='flex justify-center text-xs gap-2'>
          {genres.slice(0, 3).map(({ id, name }) => (
            <span key={id} className=''>
              {name}
            </span>
          ))}
          <span className='text-secondary'>•</span>
          <span className=''>{duration} mins</span>
        </div>
        <div className='flex flex-row justify-center text-xs'>
          <span className='mr-1'> IMDb:</span>
          <span className='fill-primary w-4'>
            <StarIcon />
          </span>
          <span className='bold'>{rating}</span>
        </div>
      </div>
    </Link>
  )
}
