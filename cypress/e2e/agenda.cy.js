describe('Agenda de Contatos - Testes E2E', () => {
  const url = 'https://ebac-agenda-contatos-tan.vercel.app/';
  
  // Gera dados aleatórios para evitar conflito
  const nomeOriginal = `João Teste ${Date.now()}`;
  const emailOriginal = `joao${Date.now()}@teste.com`;
  const telefoneOriginal = `11${Math.floor(Math.random() * 900000000 + 100000000)}`;

  const nomeAlterado = `${nomeOriginal} Alterado`;

  before(() => {
    // Visita a aplicação e cria um contato inicial para testes
    cy.visit(url);
    cy.get('input[placeholder="Nome"]').type(nomeOriginal);
    cy.get('input[placeholder="E-mail"]').type(emailOriginal);
    cy.get('input[placeholder="Telefone"]').type(telefoneOriginal);
    cy.contains('button', 'Salvar').click();
    cy.contains(nomeOriginal).should('be.visible');
  });

  beforeEach(() => {
    // Garante que sempre começa na página inicial
    cy.visit(url);
  });

  it('Deve incluir um novo contato', () => {
    const nomeNovo = `Maria Teste ${Date.now()}`;
    const emailNovo = `maria${Date.now()}@teste.com`;
    const telefoneNovo = `11${Math.floor(Math.random() * 900000000 + 100000000)}`;

    cy.get('input[placeholder="Nome"]').type(nomeNovo);
    cy.get('input[placeholder="E-mail"]').type(emailNovo);
    cy.get('input[placeholder="Telefone"]').type(telefoneNovo);
    cy.contains('button', 'Salvar').click();
    cy.contains(nomeNovo).should('be.visible');
  });

  it('Deve alterar um contato existente', () => {
    cy.contains(nomeOriginal)
      .parent()
      .within(() => {
        cy.contains('Editar').click();
      });
    cy.get('input[placeholder="Nome"]').clear().type(nomeAlterado);
    cy.contains('button', 'Salvar').click();
    cy.contains(nomeAlterado).should('be.visible');
  });

  it('Deve remover um contato', () => {
    cy.contains(nomeAlterado)
      .parent()
      .within(() => {
        cy.contains('Excluir').click();
      });
    cy.contains(nomeAlterado).should('not.exist');
  });
});
