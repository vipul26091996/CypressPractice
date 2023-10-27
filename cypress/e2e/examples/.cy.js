/// <reference types = 'cypress'/>

describe('Testing',function(){
    it('Verify',function(){

        cy.visit('https://demoqa.com/books')
        cy.get('a:contains("Git Pocket Guide")')
    })
})