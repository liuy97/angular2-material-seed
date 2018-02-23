describe('App', () => {

  beforeEach(() => {
    cy.visit('/about');
  });

  it('should have a title', () => {
    cy.title().should('be.equal', 'Welcome to angular material seed!');
  });

});
