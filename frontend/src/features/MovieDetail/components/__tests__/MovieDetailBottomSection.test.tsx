import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MovieDetailBottomSection from '../MovieDetailBottomSection'

describe('MovieDetailBottomSection', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/movies/1')
    render(
      <BrowserRouter>
        <MovieDetailBottomSection />
      </BrowserRouter>
    )
  })

  it('should contain a back button', () => {
    const backButton = screen.getByTestId('back-to-home')
    expect(backButton).toBeInTheDocument()
  })

  it('clicking on the back button should redirect to home page', () => {
    const backButton = screen.getByTestId('back-to-home')
    backButton.click()
    expect(window.location.pathname).toBe('/')
  })
})
