import { fakerPT_BR as faker } from '@faker-js/faker';


beforeEach(() => {
    cy.visit('https://demoqa.com/webtables')
});

describe('CN04 - Interações com Tabelas Web', () => {

    it('Deve criar e consullar usuário com sucesso ', () => {
        cy.get('#addNewRecordButton').click()

        const usuario = {
            nome: faker.person.firstName(),
            sobreNome: faker.person.lastName(),
            email: faker.internet.email(),
            idade: faker.number.int({ min: 18, max: 99 }),
            salario: faker.number.int({ min: 1000, max: 20000 }),
            departamento: faker.commerce.department()
        }

        cy.get('#firstName').type(usuario.nome)
        cy.get('#lastName').type(usuario.sobreNome)
        cy.get('#userEmail').type(usuario.email)
        cy.get('#age').type(usuario.idade)
        cy.get('#salary').type(usuario.salario)
        cy.get('#department').type(usuario.departamento)

        cy.get('#submit').click()

         cy.get('tbody > :nth-child(4) > :nth-child(1)').should('have.text', usuario.nome)
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('have.text', usuario.sobreNome)
        cy.get('tbody > :nth-child(4) > :nth-child(3)').should('have.text', usuario.idade)
        cy.get('tbody > :nth-child(4) > :nth-child(4)').should('have.text', usuario.email)
        cy.get('tbody > :nth-child(4) > :nth-child(5)').should('have.text', usuario.salario)
        cy.get('tbody > :nth-child(4) > :nth-child(6)').should('have.text', usuario.departamento)
    });
});