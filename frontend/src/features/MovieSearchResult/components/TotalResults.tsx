interface TotalResultsProps {
  count: number
}
export default function TotalResults({ count }: TotalResultsProps) {
  return (
    <div className=''>
      total
      <span className='p-4'>{count}</span>
      results
    </div>
  )
}
