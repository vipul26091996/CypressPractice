export class SauceLogin
{
    
    url = 'https://www.saucedemo.com/'
    loginpage_username_txtbox = '#user-name'
    loginpage_password_txtbox = '#password'
    loginpage_login_btn = '#login-button'

    visit()
    {
        cy.visit(this.url)
    }

    enterUsername(username)
    {
        cy.get(this.loginpage_username_txtbox).type(username)
    }
    enterPassword(password)
    {
        cy.get(this.loginpage_password_txtbox).type(password)
    }
    clickLogin()
    {
        cy.get(this.loginpage_login_btn).click()
    }

}