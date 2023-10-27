const loginPage_txtbox_username = 'input[name="username"]'
const loginPage_txtbox_password = 'input[type="password"]'
const loginPage_button = 'button[type="submit"]'
export class LoginPage {

   

    enterUsername(username) {
        cy.get(loginPage_txtbox_username).type(username)
    }

    enterPassword(password) {
        cy.get(loginPage_txtbox_password).type(password)
    }

    clickLogin() {

        cy.get(loginPage_button).click()
    }
    
}