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
    <div className='relative bg-slate-800 rounded-xl'>
      {icon && (
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none w-8'>
          <span className='w-4 fill-primary'> {icon}</span>
        </div>
      )}
      <input
        value={value}
        onChange={onChange}
        type={type}
        className='pl-10 pr-3 py-3 border md:w-96 rounded-xl text-md bg-slate-800 focus:bg-slate-900 focus:outline-none border-transparent focus:border-sky-200 placeholder-slate-600 text-slate-600 focus:text-light'
        {...restProps}
      />
    </div>
  )
}
