/// <reference types='cypress'/>

describe('MyTestSuite',function()
{
    before(function()
    {
        //runs once before all the tests in the block
        cy.log('------This is Setup Block-------')
    })

    after(function()
    {
        //runs once after all the tests in the block
        cy.log('-------This is Tear Down Block--------')
    })

    beforeEach(function()
    {
        //runs before each test in the block
        cy.log('-------This is Login Block-------')
    })

    afterEach(function()
    {
        //runs after each test in the block
        cy.log('-------This is LogOut Block-------')
    })

    it('Searching',function()
    {
        cy.log('-----This is Searching Test------')
    })

    it('Advanced Searching',function()
    {
        cy.log('-------This is Advanced Searching--------')
    })

    it('Listing Products',function()
    {
        cy.log('-------This is Listing Products Test-------')
    })
})