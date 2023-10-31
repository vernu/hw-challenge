/// <reference types="cypress" />

const movieId = 1

describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8000/movies/*').as('moviesApiCall')
    cy.visit(`/movies/${movieId}`)
  })

  it('should fetch the movie with the correct id', () => {
    cy.wait('@moviesApiCall').then(({ request }) => {
      expect(request.url).to.include(`/movies/${movieId}`)
    })
  })
})
