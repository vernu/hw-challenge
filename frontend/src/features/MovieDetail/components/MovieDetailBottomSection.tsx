import Button from '@/components/Button/Button'
import { Link } from 'react-router-dom'
import ArrowIcon from '@/components/icons/ArrowIcon'

export default function MovieDetailBottomSection() {
  return (
    <div className=''>
      <Link to='/' data-testid='back-to-home'>
        <Button icon={<ArrowIcon />}>Back to home</Button>
      </Link>
    </div>
  )
}
