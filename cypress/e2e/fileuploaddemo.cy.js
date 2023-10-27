///<reference types ="cypress"/>
///<reference types ="cypress-xpath"/>


it('File Upload Demo',()=>{
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')
})

it('File Download Demo',function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownload','example.jpg')
})