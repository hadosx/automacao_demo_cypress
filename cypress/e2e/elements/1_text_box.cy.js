
import { fakerPT_BR as faker } from '@faker-js/faker';

const usuarios = {
    nome: faker.person.firstName(),
    nomeCompleto: faker.person.fullName(),
    email: faker.internet.email(),
    endereco: faker.location.streetAddress(),
    textoGenerico: faker.lorem.paragraph()
}


describe('CN01 - Preenchimento de TextBox', () => {
    it('Deve preencher Nome Completo, E-mail e Endereço', () => {
        cy.visit('https://demoqa.com/text-box')

        // 1. Preenchimento
        cy.get('#userName').type(usuarios.nomeCompleto)
        cy.get('#userEmail').type(usuarios.email)
        cy.get('#currentAddress').type(usuarios.endereco)
        cy.get('#permanentAddress').type(usuarios.textoGenerico)

        cy.get('#submit').click()

        // 2. Validações no bloco de resultado gerado após o Submit
        // Usa-se 'contain' porque a div do resultado exibe "Name:Nome Gerado"
        cy.get('#name').should('contain', usuarios.nomeCompleto)
        cy.get('#email').should('contain', usuarios.email)
        cy.get('.border > #currentAddress').should('contain', usuarios.endereco)
        cy.get('.border > #permanentAddress').should('contain', usuarios.textoGenerico)
    });
});