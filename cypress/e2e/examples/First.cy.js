describe('MyFirstTest',function(){
    it('Verify the Title',function(){
        cy.visit('https://www.javatpoint.com/')
        cy.title().should('eq','Tutorials List - Javatpoint')
    })
    it('Verify the Title is wrong',function(){
        cy.visit('https://www.javatpoint.com/')
        cy.title().should('eq','Javatpoint')
    })
})