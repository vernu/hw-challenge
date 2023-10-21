import { LayoutType } from '../enums'

interface ToggleLayoutTypeProps {
  currentLayoutType: LayoutType
  onChange: (layoutType: LayoutType) => void
}

export default function ToggleLayoutType({ onChange }: ToggleLayoutTypeProps) {
  return (
    <div className='flex flex-row'>
      Layout
      <span
        className='m-2 cursor-pointer'
        onClick={() => {
          onChange(LayoutType.GRID)
        }}
      >
        Grid
      </span>
      <span
        className='m-2 cursor-pointer'
        onClick={() => {
          onChange(LayoutType.LIST)
        }}
      >
        List
      </span>
    </div>
  )
}
