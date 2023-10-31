import useMovieLayout from '../useMovieLayout'
import { LayoutType } from '../../enums'
import { act, renderHook } from '@testing-library/react'

describe('useMovieLayout', () => {
  test('should load grid layout as the default', () => {
    const { result } = renderHook(() => useMovieLayout())
    expect(result.current.layoutType).toBe(LayoutType.GRID)
  })

  test('should update layout type', () => {
    const { result } = renderHook(() => useMovieLayout())

    act(() => {
      result.current.setLayoutType(LayoutType.LIST)
    })
    expect(result.current.layoutType).toBe(LayoutType.LIST)

    act(() => {
      result.current.setLayoutType(LayoutType.GRID)
    })
    expect(result.current.layoutType).toBe(LayoutType.GRID)
  })
})
