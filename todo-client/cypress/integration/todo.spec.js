describe('to do', function () {
    it('front page loaded with all the items', function () {
        cy.visit('http://localhost:3000')
        cy.wait(5000);
        cy.get('.li-todo').should('have.length', 5)
        cy.get('.li-todo').eq(0).contains(11)

        
        cy.get('li-todo').contains('td', 'Done').then(elem => {
            // Do something with this specific element...
        cy.get('.li-todo ').eq(4).click()
        cy.get('.li-todo ').eq(4).contains('Done')
        });

        cy.get('.li-todo').contains('td', 'Pending').then(elem => {
            // Do something with this specific element...
        cy.get('.li-todo ').eq(4).click()
        cy.get('.li-todo ').eq(4).contains('Done')
        });

        // cy.get('.li-todo ').eq(4).click()
        // cy.get('.li-todo ').eq(4).contains('Done')
    })
})