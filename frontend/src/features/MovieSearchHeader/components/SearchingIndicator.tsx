import LoadingAnimatedIcon from '@/components/icons/LoadingAnimatedIcon'

export default function SearchingIndicator() {
  return (
    <div className='fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full backdrop-brightness-50'>
      <span className='fill-light w-8'>
        <LoadingAnimatedIcon />
      </span>
      <div className='text-primary'>Searching in HelloMovies...</div>
    </div>
  )
}
