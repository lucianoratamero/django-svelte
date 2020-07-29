

describe('SampleNestedPage', () => {
  beforeEach(() => {
    cy.visit('/sample-nested-page');
  })

  it('has the base <h1> title', () => {
    cy.contains('h1', 'Django + Svelte + Webpack');
  });

  it('navigates to /sample-nested-page', () => {
    cy.get('a').contains('home').click();
    cy.url().should('be', '/');
  });
});
