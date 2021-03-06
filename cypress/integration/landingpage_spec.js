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

  it.skip('Should remove friend card from friends container when fist bump is clicked', () => {
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
      .get('#2.fistbump')
      .click()
      .get('.friend-container')
      .children()
      .should('have.length', 1)
      .contains('You dont have any friends yet. Go make some friends!')
  })

  it.skip('has message if you have no friends', () => {
    cy.get('.menu')
      .click()
      .get('[href="/my-friends"] > .menu-btn')
      .click()
      .get('.no-friends')
  })

  it.skip('Profile card includes img, and details', () => {
    cy.get('.menu')
      .click()
      .get('[href="/profiles"] > .menu-btn')
      .click()
      .get(':nth-child(1) > .card-imgs')
      .get(':nth-child(1) > .card-imgs > .open')
      .click()
      .get('.profile-description')
      .contains('Laura Lee Long Makelky')
  })

  it.skip('Events button takes you to the events page', () => {
    cy.get('.menu')
      .click()
      .get('[href="/events"] > .menu-btn')
      .click()
      .url()
      .should('include', 'http://localhost:3000/events')
  })

  it.skip('contains events', () => {
    cy.get('.menu')
      .click()
      .get('[href="/events"] > .menu-btn')
      .click()
      .get('.event-card-container')
      .children()
      .should('have.length', 2)
  })

  it.skip('has a form', () => {
    cy.get('.menu')
      .click()
      .get('[href="/events"] > .menu-btn')
      .click()
      .get('.event-form-container')
      .find('form')
  })

  it.skip('when form is completed and submitted, new event card appears', () => {
    cy.get('.menu')
      .click()
      .get('[href="/events"] > .menu-btn')
      .click()
      .get('form')
      .get('[placeholder="Host Name"]')
      .type('Bethany')
      .get('[placeholder="What is the occasion?"]')
      .type('Test')
      .get('[placeholder="Where?"]')
      .type('Test')
      .get('[placeholder="When?"]')
      .type('Test')
      .get('[placeholder="Time?"]')
      .type('Test')
      .get('[placeholder="Description of Event"]')
      .type('Test')
      .get('.submit')
      .click()
      .get('.event-card-container')
      .children()
      .should('have.length', 3)
  })

})