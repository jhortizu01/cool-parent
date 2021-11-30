describe('Home page flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'hhttps://cool-parent-api.herokuapp.com/api/v1/parents/parentData/', {  })
      .as('parentData')
    cy.intercept('GET', 'https://cool-parent-api.herokuapp.com/api/v1/parents/eventData/', { })
      .as('eventData')
    cy.visit('http://localhost:3000/')
  })

  it('Should display an error if there is a 400 status code on the profiles page', () => {
    cy.get('.menu')
      .click()
      .get('[href="/profiles"] > .menu-btn')
      .click()
      .get('.error-message')
      .contains('404: Sanity not found. Please come back later... with coffee.')
      .url()
      .should('include', '/profiles')
  })

  it('Should display an error if there is a 400 status code on events page', () => {
    cy.get('.menu')
      .click()
      .get('[href="/events"] > .menu-btn')
      .click()
      .get('.error-message')
      .contains('404: Sanity not found. Please come back later... with coffee.')
      .url()
      .should('include', '/events')
  })

  it('Should display an error if there is a 400 status code on my friends page', () => {
    cy.get('.menu')
      .click()
      .get('[href="/my-friends"] > .menu-btn')
      .click()
      .get('.error-message')
      .contains('404: Sanity not found. Please come back later... with coffee.')
      .url()
      .should('include', '/my-friends')
  })
})