describe('Contact form flow', () => {
  it('submits appointment request', () => {
    cy.intercept('POST', '/.netlify/functions/contact', {
      statusCode: 200,
      body: { success: true },
    }).as('contactRequest');

    cy.visit('/contact');

    cy.get('input[name="fullName"]').type('Test Patient');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="phone"]').type('+917000000000');
    cy.get('select[name="serviceInterest"]').select('Hair Treatments');
    cy.get('input[name="preferredDate"]').type('2025-11-25');
    cy.get('input[name="preferredTime"]').type('10:30');
    cy.get('textarea[name="message"]').type('Looking to book a hydrafacial session next week.');

    cy.contains('button', /submit request/i).click();
    cy.wait('@contactRequest');
    cy.contains('Request received').should('be.visible');
  });
});


