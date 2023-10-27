/// <reference types='cypress'/>

describe('Verify the Add to Cart functionality',function()
{
    it('Verify user can add the item',function()
    {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('one plus 7t back cover')
        cy.get('.L0Z3Pu').click()         // click on search button
        cy.wait(5000)                     // wait for 5s
        cy.get('[data-id="ACCFNA9FHEUZM5BJ"] > ._4ddWXP > .s1Q9rs').invoke('removeAttr', 'target').click()  //click on product
        // cy.get('.row > :nth-child(1) > ._2KpZ6l').click()
        cy.get('._1_3w1N').click()
        // cy.get('button[class="_2KpZ6l _2U9uOA _3v1-ww"]').click()  //Add to Cart
        // cy.wait(500)
        // cy.get('._2KpZ6l _1t_O3S _2ti6Tf _3AWRsL').click()
        // cy.get('.row > :nth-child(1) > ._2KpZ6l').click()
        // cy.get('._2KpZ6l _2ObVJD _3AWRsL').click()  //Place Order
        cy.get(':nth-child(1) > ._2IX_2-').type('8285025705')
        cy.get(':nth-child(2) > ._2IX_2-').type('v!pulgol@66')
        cy.get('._1D1L_j > ._2KpZ6l').click()
        cy.get('._2KpZ6l _2U9uOA ihZ75k _3AWRsL').click()
        // cy.get('._2YULOR').contains('Your username or password is incorrect')

    })
})