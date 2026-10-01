// Para dados em Português do Brasil (PT-BR)
import { fakerPT_BR as faker } from '@faker-js/faker';

// Ou para dados em Inglês (Padrão)
// import { faker } from '@faker-js/faker';

// Exemplos de geração de dados:
const nomeCompleto = faker.person.fullName();
const email = faker.internet.email();
const telefone = faker.phone.number();
const endereco = faker.location.streetAddress();
const textoGenerico = faker.lorem.paragraph()
const dataNascimento = faker.date.birthdate().toLocaleDateString('pt-BR');

it('Exemplos de retorno do Faker.js', () => {
    cy.log(nomeCompleto)
    cy.log(email)
    cy.log(telefone)
    cy.log(endereco)
    cy.log(dataNascimento)
    cy.log(textoGenerico)
});

/*
4. Principais Módulos do Faker
faker.person: fullName(), firstName(), lastName(), gender(), jobTitle()

faker.internet: email(), username(), password(), url(), ipv4()

faker.location: streetAddress(), city(), state(), zipCode(), country()

faker.finance: amount(), accountNumber(), creditCardNumber()

faker.string: alphanumeric(), numeric(), uuid()

faker.date: past(), future(), recent(), birthdate()
*/

