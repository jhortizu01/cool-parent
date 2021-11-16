describe('Home page flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8080/api/v1/parents/parentData', { fixture: "parents.json" })
      .as('parentData')
    cy.intercept('GET', 'http://localhost:8080/api/v1/parents/eventData', { fixture: "events.json" })
      .as('eventData')
    cy.visit('http://localhost:3000')
  })

  it('Should be able to visit http://localhost:3000', () => {
    cy.url()
      .should('include', '/')
  })

  it('Should display a Navigation with 3 buttons and a title', () => {
    cy.get('nav')
      .get('.title1')
      .get('.title2')
      .get('button')
  })

  it('Should display 3 cards', () => {
    cy.get('.parent-container')
      .children()
      .should('have.length', 3)
  })

  it('Should display profile info on arrow', () => {
    cy.get(':nth-child(1) > .card-imgs > .open')
      .click()
      .get('.description')
      .should('be.visible')
  })

  it('Should change fist image to fist bump when clicked' , () => {
    cy.get('#fistbump')
      .click()
      .should('be.visible', '#friendbump')
  })
})