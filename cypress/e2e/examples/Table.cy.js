/// <reference types = 'cypress'/>

describe('My Table Test',function()
{
    it('table Test',function()
    {
        cy.visit('https://testautomationpractice.blogspot.com/')

        //Check value presence anywhere in the table.
        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        //Check value presence in specific row and column.
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        //Check value presence based on condition by iterating rows.
        //Check the book name "Master in Java" whose author is Amod.
        cy.get('table[name=BookTable]>tbody>tr tdnth-child(2)').each(($e1,index,$list) =>   //get the CSS selector of Author column
        {
        const text = $e1.text()
        if(text.includes("Amod"))
        {
            cy.get('table[name=BookTable]>tbody>tr tdnth-child(1)').eq(index).then(function(bname) //get the CSS selector of Book Name and beacuse of 'index' variable we will go to particular row.
            {
                const bookName = bname.text()
                expect(bookName).to.equal("Master in Java")
            })

        }


        })
    })
})