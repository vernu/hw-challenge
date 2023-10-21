import Input from '../../../components/Input/Input'

export default function SearchMovieSection() {
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <Input placeholder='Search for your next movie' />
      </div>

      <div className='flex flex-row justify-center items-center'>
        <span>Movies</span>
        {' | '}
        <span>Series</span>
      </div>
    </>
  )
}
