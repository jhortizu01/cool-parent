describe('landing page flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://cool-parent-api.herokuapp.com/api/v1/parents/parentData/', { fixture: "parents.json" })
      .as('parentData')
    cy.intercept('GET', 'https://cool-parent-api.herokuapp.com/api/v1/parents/eventData/', { fixture: "events.json" })
      .as('eventData')
    cy.visit('http://localhost:3000/')
  })

  it.skip('display a nav bar with a title and menu', () => {
    cy.get('.landing-nav')
      .get('.nav-title')
      .contains('Cool Parent')
      .get('.menu')
  })

  it.skip('menu displays 5 buttons', () => {
    cy.get('.menu')
      .click()
      .get('[href="/"] > .menu-btn')
      .get('[href="/profiles"] > .menu-btn')
      .get('[href="/events"] > .menu-btn')
      .get('[href="/my-friends"] > .menu-btn')
      .get('.items > :nth-child(4)')
      .get('[href="/meet-the-creator"] > .menu-btn')
  })

  it.skip('Profiles button takes you to the profiles page', () => {
    cy.get('.menu')
      .click()
      .get('[href="/profiles"] > .menu-btn')
      .click()
      .url()
      .should('include', 'http://localhost:3000/profiles')
  })

  it.skip('Shows 4 profiles', () => {
    cy.get('.menu')
      .click()
      .get('[href="/profiles"] > .menu-btn')
      .click()
      .get('.parent-container')
      .children()
      .should('have.length', 4)
  })

  it.skip('Should be able to click fist bump and see that person on friends list', () => {
    cy.get('.menu')
      .click()
      .get('[href="/profiles"] > .menu-btn')
      .click()
      .get(':nth-child(1) > .card-imgs')
      .get('#2.fistbump')
      .click()
      .get('.menu')
      .click()
      .get('[href="/my-friends"] > .menu-btn')
      .click()
      .get('.name')
      .contains('Veronica Campbell')
  })

  it('')



  it.skip('Events button takes you to the events page', () => {
    cy.get('.menu')
      .click()
      .get('[href="/events"] > .menu-btn')
      .click()
      .url()
      .should('include', 'http://localhost:3000/events')
  })
})