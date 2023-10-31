/// <reference types="cypress" />

const searchInputSelector = '[data-testid="search-movie-input"]'
const moviesGridViewSelector = '[data-testid="movies-grid-view"]'
const moviesListViewSelector = '[data-testid="movies-list-view"]'
const noResultsFoundSelector = '[data-testid="no-results-found"]'
const listLayoutButtonSelector = '[data-testid="list-layout"]'
const gridLayoutButtonSelector = '[data-testid="grid-layout"]'
const nextPageButtonSelector = '[data-testid="next-button"]'
const previousPageButtonSelector = '[data-testid="previous-button"]'

describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8000/movies/*').as('moviesApiCall')
    cy.visit('/')
  })

  it('should contain search input', () => {
    cy.get(searchInputSelector).should('exist')
  })

  it('should search for movies with the given search query', () => {
    const inputValue = 'Avatar'

    cy.get(searchInputSelector)
      .type(inputValue)
      .should('have.value', inputValue)

    cy.wait('@moviesApiCall').then((interception) => {
      const queryParam = interception.request.url.split('?')[1]
      expect(queryParam).to.include('query=Avatar')
    })

    cy.get(moviesGridViewSelector).should('exist')
  })

  it('not found message should be desplayed when searching for a non existing movie', () => {
    const inputValue = 'This movie title does not exist'

    cy.get(searchInputSelector).type(inputValue)

    cy.wait('@moviesApiCall')

    cy.get(noResultsFoundSelector).should('exist')
  })

  it('clicking on change layout buttons should switch the view types', () => {
    const inputValue = 'A'
    cy.get(searchInputSelector).type(inputValue)

    cy.wait('@moviesApiCall')

    cy.get(listLayoutButtonSelector).click()
    cy.get(moviesListViewSelector).should('exist')
    cy.get(moviesGridViewSelector).should('not.exist')

    cy.get(gridLayoutButtonSelector).click()
    cy.get(moviesGridViewSelector).should('exist')
    cy.get(moviesListViewSelector).should('not.exist')
  })

  it('previous page button should be disabled on the first page', () => {
    const inputValue = 'A'
    cy.get(searchInputSelector).type(inputValue)

    cy.wait('@moviesApiCall')

    cy.get(previousPageButtonSelector).should('have.attr', 'disabled')
  })

  it('clicking on next and previous page buttons should trigger update the movies list', () => {
    const inputValue = 'A'
    cy.get(searchInputSelector).type(inputValue)

    cy.wait('@moviesApiCall')

    cy.get(nextPageButtonSelector).click()

    cy.wait('@moviesApiCall').then((interception) => {
      const queryParam = interception.request.url.split('?')[1]
      expect(queryParam).to.include('p=2')
    })

    cy.get(previousPageButtonSelector).click()

    cy.wait('@moviesApiCall').then((interception) => {
      const queryParam = interception.request.url.split('?')[1]
      expect(queryParam).to.include('p=1')
    })
  })
})
