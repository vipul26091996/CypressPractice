///<reference types="cypress"/>

import { SauceLogin } from "../PageObject/SauceLogin"

const saucelogin = new SauceLogin()

describe('login tests', () => {
    before(function(){
        cy.fixture('saucelogin.json').as('login_data')
    })
   
    it('login 1', function () {
        saucelogin.visit()
        saucelogin.enterUsername(this.login_data.username)
        saucelogin.enterPassword(this.login_data.password)
        saucelogin.clickLogin()

    })
})