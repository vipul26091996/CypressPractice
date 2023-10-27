import { LoginPage } from "./pages/login_pages"

const loginPage = new LoginPage()

beforeEach(function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})
describe('All Login Tests', () => {


    it('Login Test 1', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()

    })

    it.skip('Login Test 2', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()


    })
})

it('Login Test 3', () => {
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-tab').click()
})