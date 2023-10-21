import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children }: ButtonProps) {
  return <button className=''>{children}</button>
}
