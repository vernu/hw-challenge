import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='dark bg-slate-900 text-light flex flex-col min-h-screen'>
      <Header />
      <main className='mt-8 p-[16px] md:p-[20px] lg:p-[40px]'>{children}</main>
      <Footer />
    </div>
  )
}
