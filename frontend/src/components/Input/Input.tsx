import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

export default function Input({
  value,
  onChange,
  type,
  icon,
  ...restProps
}: InputProps) {
  return (
    <div className='relative'>
      <div className='absolute flex items-center'>{icon && icon}</div>
      <input
        id='search'
        value={value}
        onChange={onChange}
        type={type}
        className='block p-2 text-slate-800'
        {...restProps}
      />
    </div>
  )
}
