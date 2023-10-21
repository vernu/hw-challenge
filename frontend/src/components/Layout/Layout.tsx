import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='dark bg-slate-900 text-white flex flex-col min-h-screen'>
      <Header />
      <main className='m-8'>{children}</main>
      <Footer />
    </div>
  )
}
