import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...restProps }: ButtonProps) {
  return (
    <button className='' {...restProps}>
      {children}
    </button>
  )
}
