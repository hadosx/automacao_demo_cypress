
beforeEach(() => {
    cy.visit('https://demoqa.com/radio-button')
});

describe('CN03 - Interações com Radio Button', () => {
    it('Deve selecionar o radio button Yes com sucesso', () => {
        //1. Selecionar radio button Yes:
        cy.get(':nth-child(1) > [name="like"]').check()
        //2. Validação
        cy.get('.text-success').should('have.text', 'Yes')
    });

    it('Deve selecionar o radio button Impressive com sucesso', () => {
        //1. Selecionar radio button Impressive:
        cy.get(':nth-child(2) > [name="like"]').check()
        //2. Validação
        cy.get('.text-success').should('have.text', 'Impressive')

        // Valida que o radio button está desabilitado
        cy.get('#noRadio').should('be.disabled');
    });

    it('NÃO deve selecionar o radio button desabilitado', () => {
        cy.get('#noRadio').should('be.disabled');
        
    });
});


/*
1. Como o .check() funciona
O comando .check() exige obrigatoriamente que o elemento selecionado seja um <input type="checkbox"> ou <input type="radio"> nativo.

Se você tentar usar .check() em um elemento que não é um input nativo (por exemplo, uma <div>, <span>, <label> ou um ícone customizado de biblioteca como Material UI/Bootstrap), o Cypress lança um erro dizendo que o elemento não é um checkbox válido.

2. Como o .click() funciona
O .click() é um comando genérico de ação do usuário. Ele dispara eventos de clique em qualquer elemento do DOM, independentemente da tag HTML (<div>, <svg>, <button>, etc.).
*/