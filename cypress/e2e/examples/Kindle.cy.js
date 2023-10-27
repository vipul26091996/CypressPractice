/// <reference types='cypress'/>

describe('Verify the amazon functionality',function()
{
    it('Add to Cart',function()
    {
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('kindle')
        cy.get('[type=submit]').click()
        cy.get('[data-asin="B07FQ4Q7MB"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .s-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').invoke('removeAttr', 'target').click()  
        // cy.visit('https://www.amazon.in/Kindle-10th-Gen/dp/B07FQ4Q7MB/ref=sr_1_1?crid=2YWR3RWIT8HQN&keywords=kindle&qid=1643611746&sprefix=kindle%2Caps%2C542&sr=8-1&th=1')
        // cy.get('#add-to-cart-button').click()
        // cy.get('#a-autoid-3 > span > input').click()
    
    })

})