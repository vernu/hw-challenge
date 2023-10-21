import { render, screen } from '@testing-library/react'
import Layout from '../Layout'
import { BrowserRouter } from 'react-router-dom'

describe('Layout', () => {
  it('should contain header and footers', () => {
    render(
      <BrowserRouter>
        <Layout>content</Layout>
      </BrowserRouter>
    )

    const header = screen.getByTestId('header')
    const footer = screen.getByTestId('footer')

    expect(header).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })
})
