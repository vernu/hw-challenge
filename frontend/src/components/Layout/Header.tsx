import { Link } from 'react-router-dom'
import headerLogo from '@/assets/logos/header-logo.svg'

export default function Header() {
  return (
    <header data-testid='header'>
      <Link to='/'>
        <img
          src={headerLogo}
          alt='HelloMovies Logo'
          className='w-32 mx-12 my-4'
        />
      </Link>
    </header>
  )
}
