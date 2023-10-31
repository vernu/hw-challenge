import footerLogo from '@/assets/logos/footer-logo.svg'
import DribbbleIcon from '../icons/DribbbleIcon'
import { Link } from 'react-router-dom'
import FacebookIcon from '../icons/FacebookIcon'
import InstagramIcon from '../icons/InstagramIcon'
import LinkedInIcon from '../icons/LinkedInIcon'

const socialIcons = [
  {
    icon: <FacebookIcon />,
    link: 'https://facebook.com',
  },
  {
    icon: <LinkedInIcon />,
    link: 'https://linkedin.com',
  },
  {
    icon: <DribbbleIcon />,
    link: 'https://dribbble.com',
  },
  {
    icon: <InstagramIcon />,
    link: 'https://instagram.com',
  },
]

export default function Footer() {
  return (
    <footer className='mt-auto mx-12 my-4' data-testid='footer'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col md:flex-row justify-center items-center font-thin'>
          <div className='flex justify-center items-center'>
            <img src={footerLogo} alt='HelloMovies Logo' className='w-32 h-4' />
            <span className='text-sky-300 text-xl mr-2'>|</span>
          </div>

          <span className=''>
            &copy; Copyright {new Date().getFullYear()} HelloMovies. All rights
            reserved.
          </span>
        </div>

        <div className=''>
          {
            <div className='flex flex-row gap-4 justify-center py-4'>
              {socialIcons.map(({ icon, link }) => (
                <span className='w-5' key={link}>
                  <Link to={link}>
                    <span className='w-4 fill-light'> {icon}</span>
                  </Link>
                </span>
              ))}
            </div>
          }
        </div>
      </div>
    </footer>
  )
}
