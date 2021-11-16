describe('Home page flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8080/api/v1/parents/parentData', { fixture: "parents.json" })
      .as('parentData')
    cy.intercept('GET', 'http://localhost:8080/api/v1/parents/eventData', { fixture: "events.json" })
      .as('eventData')
    cy.visit('http://localhost:3000')
  })

  it('Should take you to the friends page when clicked', () => {
    cy.get('[href="/my-friends"] > .button')
      .click()
      .url()
      .should('include', '/my-friends')
  })

  it('Should add one friend to friends page when fist is clicked ' , () => {
    cy.get(':nth-child(1) > .card-imgs > .img-container')
      .click()
      .get('[href="/my-friends"] > .button')
      .click()
      .get('.friend-container')
      .children()
      .should('have.length', 1)
  })

  it('Should remove friend card from friends container when fist bump is clicked', () => {
    cy.get('#1.fistbump')
      .click()
      .children()
      .should('have.length', 0)
  })

  it('Should display You dont have any friends yet. Go make some friends! when there are no friends to display', () => {
    cy.get('[href="/my-friends"] > .button')
      .click()
      .get('.friend-container')
      .get('.no-friends')
      .contains('div', 'You dont have any friends yet. Go make some friends!')
      .should('be.visible')
  })


})