import Button from '@/components/Button/Button'
import { MovieEntity } from '@/services/movieApi'
import { Link } from 'react-router-dom'
import ArrowIcon from '@/components/icons/ArrowIcon'
import StarIcon from '@/components/icons/StarIcon'

interface MovieDetailProps {
  movie: MovieEntity
}
export default function MovieDetail({ movie }: MovieDetailProps) {
  const {
    title,
    image,
    overview,
    genres,
    duration,
    rating,
    actors,
    director,
    year,
  } = movie
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:mx-36'>
        <div className='relative'>
          <img src={image} alt={title} className='rounded-xl' />
          <div className='absolute top-8 left-0 flex items-center justify-center'>
            <span className='bg-dark text-light px-2 py-1 text-sm rounded-br-xl rounded-tr-xl'>
              {year}
            </span>
          </div>
        </div>

        <div className='md:col-span-2 my-8'>
          <h1 className='text-4xl text-secondary font-bold uppercase'>
            {title}
          </h1>
          <div className='my-4'>{overview}</div>

          <div className='flex justify-between py-4'>
            <div className=''>
              {genres.map(({ id, name }) => (
                <span key={id} className='m-2'>
                  {name}
                </span>
              ))}
              <span className='text-primary'>{duration} mins</span>
            </div>

            <div className='flex flex-row justify-center items-center gap-2'>
              <span className=''> IMDb:</span>

              <span className='fill-primary w-4'>
                <StarIcon />
              </span>

              <span className=''> {rating}</span>
            </div>
          </div>
          <hr />
          <div className='flex flex-col py-4 gap-2'>
            <div className='flex'>
              <span className='w-24 text-sky-200'> Director: </span>
              <span className=''>{director}</span>
            </div>
            <div className='flex'>
              <span className='w-24 text-sky-200'> Director: </span>
              <span className=''>
                {actors?.split(',').map((actor) => (
                  <div key={actor}>{actor}</div>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <Link to='/'>
          <Button icon={<ArrowIcon />}>Back to home</Button>
        </Link>
      </div>
    </div>
  )
}
