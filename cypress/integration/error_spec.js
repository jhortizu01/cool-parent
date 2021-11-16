describe('Home page flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8080/api/v1/parents/parentData', {  })
      .as('parentData')
    cy.intercept('GET', 'http://localhost:8080/api/v1/parents/eventData', { })
      .as('eventData')
    cy.visit('http://localhost:3000')
  })

  it('Should display an error if there is a 400 status code on home', () => {
    cy.get('.App')
      .contains('404: Sanity not found. Please come back later... with coffee.')
      .url()
      .should('include', '/')
  })

  it('Should display an error if there is a 400 status code on events page', () => {
    cy.get('[href="/events"] > .button')
      .click()
      .get('.App')
      .contains('404: Sanity not found. Please come back later... with coffee.')
      .url()
      .should('include', '/events')
  })

  it('Should display an error if there is a 400 status code on my friends page', () => {
    cy.get('[href="/my-friends"] > .button')
      .click()
      .get('.App')
      .contains('404: Sanity not found. Please come back later... with coffee.')
      .url()
      .should('include', '/my-friends')
  })
})