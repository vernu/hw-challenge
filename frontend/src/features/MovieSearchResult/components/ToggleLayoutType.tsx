import GridLayoutIcon from '@/components/icons/GridLayoutIcon'
import { LayoutType } from '../enums'
import ListLayoutIcon from '@/components/icons/ListLayoutIcon'

interface ToggleLayoutTypeProps {
  currentLayoutType: LayoutType
  onChange: (layoutType: LayoutType) => void
}

export default function ToggleLayoutType({
  currentLayoutType,
  onChange,
}: ToggleLayoutTypeProps) {
  const baseClass =
    'w-8 cursor-pointer rounded-xl p-2 active:text-primary border border-slate-800 hover:border-sky-200 hover:text-primary active:border-slate-900 active:bg-slate-900'
  const activeClass = `${baseClass} fill-primary bg-black`
  const inactiveClass = `${baseClass} fill-light bg-slate-800`

  return (
    <div className='flex flex-row gap-2 items-center'>
      Layout
      <span
        onClick={() => {
          onChange(LayoutType.GRID)
        }}
        className={
          currentLayoutType == LayoutType.GRID ? activeClass : inactiveClass
        }
        data-testid='grid-layout'
      >
        <GridLayoutIcon />
      </span>
      <span
        onClick={() => {
          onChange(LayoutType.LIST)
        }}
        className={
          currentLayoutType == LayoutType.LIST ? activeClass : inactiveClass
        }
        data-testid='list-layout'
      >
        <ListLayoutIcon />
      </span>
    </div>
  )
}
