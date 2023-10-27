/// <reference types='cypress'/>

class LoginPage
{

    visit()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')
    }

    fillEmail(value)
    {
        const field = cy.get('[id=Email]')
        field.clear()
        field.type(value)
    }
    
    fillPassword(value)
    {
        const field = cy.get('[id=Password]')
        field.clear()
        field.type(value)
    }

    submit()
    {
        const button = cy.get('[type=submit]')
        button.click()

    }
}

export default LoginPage