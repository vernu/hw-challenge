interface TotalResultsProps {
  count: number
}
export default function TotalResults({ count }: TotalResultsProps) {
  return (
    <div className='flex flex-row gap-2'>
      Found
      <span className='text-primary'>{count}</span>
      Movies
    </div>
  )
}
