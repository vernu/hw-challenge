import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
}

export default function Button({
  children,
  icon,
  disabled,
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={`bg-slate-800 px-4 py-1 rounded-xl text-light active:text-primary border ${
        disabled
          ? 'text-slate-600 border-slate-800'
          : 'border-slate-800 hover:border-sky-200 hover:text-primary active:border-slate-900 active:bg-slate-900'
      }`}
      disabled={disabled}
      {...restProps}
    >
      <div className='flex gap-2'>
        {icon && <div className='fill-primary w-6'>{icon}</div>}
        {children}
      </div>
    </button>
  )
}
