/// <reference types='cypress'/>

describe('DemoQA',function()
{
    it('Registration form',function()
    {
        
        cy.visit('https://demoqa.com/')
        cy.url().should('include','demoqa')
        cy.title().should('eq','ToolsQA')

        cy.get('#app > div > div > div.home-body > div > div:nth-child(2) > div > div.avatar.mx-auto.white > svg').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()

        cy.get('#firstName').type('Vipul')
        cy.get('#lastName').type('Kumar')
        cy.get('#userEmail').type('vipulgola66@gmail.com')
        cy.get('#gender-radio-1').should('not.be.checked').click({force:true})
        cy.get('#gender-radio-2').should('not.be.checked')
        cy.get('#gender-radio-3').should('not.be.checked')
        cy.get('#gender-radio-3').click({force:true})
        cy.get('#gender-radio-1').click({force:true})
        cy.get('#gender-radio-1').should('be.checked')
        cy.get('#userNumber').type('2851651751473534')
        cy.get('#userNumber').clear().type('9876543210')
        // cy.get('#dateOfBirthInput').clear().type('26 Sep 1996')
        cy.get('#subjectsContainer').type('English').type('Hindi  Physics  Chemistry  Mathematics') 
        cy.get('#hobbies-checkbox-1').should('not.be.checked').check({force:true}).and('have.value','1')
        cy.get('#hobbies-checkbox-2').check({force:true}).should('be.checked').and('have.value','2')
        cy.get('#hobbies-checkbox-3').check({force:true}).should('be.checked').and('have.value','3')
        cy.get('#hobbies-checkbox-1').uncheck({force:true}).should('not.be.checked')
        cy.get('#currentAddress').type('II C Nehru Nagar Ghaziabad 201001')
        cy.get('#state').click().contains('Haryana').click()
        // cy.get('#state').type('{enter}')
        cy.get('#city').click().contains('Panipat').click()
        // cy.get('#city').click({force:true}).type('meerut')
        // cy.get('#city').type('{enter}')
        cy.get('#submit').should('be.visible').should('be.enabled').click()
        // cy.get('#closeLargeModal').click({force:true})


    })
})