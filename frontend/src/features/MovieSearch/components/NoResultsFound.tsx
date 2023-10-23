interface NoResultsFoundProps {
  query: string
}
export default function NoResultsFound({ query }: NoResultsFoundProps) {
  return (
    <div
      className='flex justify-center text-primary'
      data-testid='no-results-found'
    >
      No results found for "{query}"
    </div>
  )
}
