describe('Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/');
  });

  it('Deve incluir um novo contato', () => {
    cy.get('input[type="text"]').type('Gian Souza Cypress');
    cy.get('input[type="email"]').type('gian.cypress@ebac.com.br');
    cy.get('input[type="tel"]').type('11912345678');
    cy.get('.adicionar').click();

    cy.contains('Gian Souza Cypress', { timeout: 25000 }).should('be.visible');
  });

  it('Deve alterar um contato existente', () => {
    // Cria contato para alteração
    cy.get('input[type="text"]').type('Contato Original');
    cy.get('input[type="email"]').type('original@teste.com');
    cy.get('input[type="tel"]').type('11000000000');
    cy.get('.adicionar').click();
    cy.contains('Contato Original', { timeout: 25000 }).should('be.visible');

    // Altera o contato
    cy.contains('Contato Original')
      .closest('.contato')
      .find('.edit')
      .click();

    cy.get('input[type="text"]').clear().type('Contato Alterado');
    cy.get('input[type="email"]').clear().type('alterado@teste.com');
    cy.get('.alterar').click();

    // Espera o DOM atualizar antes de verificar
    cy.contains('Contato Alterado', { timeout: 25000 }).should('be.visible');
    cy.contains('Contato Original', { timeout: 25000 }).should('not.exist');
  });

  it('Deve remover um contato', () => {
    // Cria contato para remoção
    cy.get('input[type="text"]').type('Contato a ser Removido');
    cy.get('input[type="email"]').type('remover@teste.com');
    cy.get('input[type="tel"]').type('11111111111');
    cy.get('.adicionar').click();
    cy.contains('Contato a ser Removido', { timeout: 25000 }).should('be.visible');

    // Remove
    cy.contains('Contato a ser Removido')
      .closest('.contato')
      .find('.delete')
      .click();

    // Aguarda a remoção no DOM
    cy.contains('Contato a ser Removido', { timeout: 25000 }).should('not.exist');
  });
});
