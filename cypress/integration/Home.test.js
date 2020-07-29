

describe('Home', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('sample-api-view.json').as('fixture');
    cy.route('/api/sample-api-view/', '@fixture').as('sample-api-view');

    cy.visit('/');
  })

  it('has the base <h1> title', () => {
    cy.contains('h1', 'Django + Svelte + Webpack');
  });

  it('shows welcome message and placeholder', () => {
    cy.contains('p', 'Welcome message is being fetched from the api...');
    cy.wait('@sample-api-view');

    cy.contains('p', 'This is the stubbed return');
  });

  it('navigates to /sample-nested-page', () => {
    cy.get('a').contains('sample nested page').click();
    cy.url().should('include', '/sample-nested-page');
  });
});
