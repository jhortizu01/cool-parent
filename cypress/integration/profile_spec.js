describe('Home page flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://cool-parent-api.herokuapp.com/api/v1/parents/parentData/', { fixture: "parents.json" })
      .as('parentData')
    cy.intercept('GET', 'https://cool-parent-api.herokuapp.com/api/v1/parents/eventData/', { fixture: "events.json" })
      .as('eventData')
    cy.visit('https://cool-parent.herokuapp.com/')
  })

  it('Should be able to visit https://cool-parent.herokuapp.com/', () => {
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