before(function(){
    cy.fixture('example.json').as('fixturedata')
})


it('Read files usng Fixture',function(){

    // cy.fixture('example.json').then((data)=>{
    //     cy.log(data.name)
    //     cy.log(data.email)
    // })

    cy.log(this.fixturedata.name)
    cy.log(this.fixturedata.email)
})

it('Read files using readFile()',()=>{
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
    })
})

it('Write file demo',function(){
    cy.writeFile('sample.txt','Hello I am Vipul Kumar \n')

    cy.writeFile('sample.txt', 'I am learning Cypress', {flag:'a+'})
})