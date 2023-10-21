interface NoResultsFoundProps {
  query: string
}
export default function NoResultsFound({ query }: NoResultsFoundProps) {
  return (
    <div className='flex justify-center text-primary'>
      No results found for "{query}"
    </div>
  )
}
