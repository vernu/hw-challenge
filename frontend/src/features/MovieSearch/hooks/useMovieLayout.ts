import { useState } from 'react'
import { LayoutType } from '../enums'

export default function useMovieLayout() {
  const [layoutType, setLayoutType] = useState<LayoutType>(LayoutType.GRID)

  return {
    layoutType,
    setLayoutType,
  }
}
