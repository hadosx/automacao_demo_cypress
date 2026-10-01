

beforeEach(() => {
    cy.visit('https://demoqa.com/checkbox')
});
describe('CN02 - Validações de CheckBox ', () => {
    it('Deve selecionar o checkbox Home com sucesso', () => {
        //1. Seleção do checkbox Geral 'Home'
        cy.get('.rc-tree-switcher').click()
        cy.get('.rc-tree-treenode-switcher-open > .rc-tree-checkbox').click()
        //2. Validações da seleção
        cy.get('#result')
            .should('contain.text', 'You have selected :')
            .and('contain.text', 'home')
            .and('contain.text', 'desktop')
            .and('contain.text', 'documents')
            .and('contain.text', 'general');
    });

    it('Deve sselecionar o checkbox Desktop com sucesso', () => {
        //1. Seleção do checkbox Geral 'Desktop'
        cy.get('.rc-tree-switcher').click()
        cy.get(':nth-child(2) > .rc-tree-checkbox').click()
        //2. Validações da seleção
        cy.get('#result')
            .should('contain.text', 'You have selected :')
            .and('contain.text', 'desktop')

    });

    it('Deve sselecionar o checkbox Documents com sucesso', () => {
        //1. Seleção do checkbox Geral 'Documents'
        cy.get('.rc-tree-switcher').click()
        cy.get(':nth-child(3) > .rc-tree-checkbox').click()
        //2. Validações da seleção
        cy.get('#result')
            .should('contain.text', 'You have selected :')
            .and('contain.text', 'documents')

    });

    it('Deve sselecionar o checkbox Downloads com sucesso', () => {
        //1. Seleção do checkbox Geral 'Downloads'
        cy.get('.rc-tree-switcher').click()
        cy.get('.rc-tree-treenode-switcher-close.rc-tree-treenode-leaf-last > .rc-tree-checkbox').click()
        //2. Validações da seleção
        cy.get('#result')
            .should('contain.text', 'You have selected :')
            .and('contain.text', 'downloads')

    });
});