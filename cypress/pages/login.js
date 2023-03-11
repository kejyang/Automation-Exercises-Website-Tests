class LoginPage{

    loginEmailInput(text){
        return cy.get('[data-qa="login-email"]').type(text)
    }

    loginPasswordInput(text){
        return cy.get('[data-qa="login-password"]').type(text)
    }

    getLoginButton(){
        return cy.get('[data-qa="login-button"]')
    }

    signUpEmailInput(text){
        return cy.get('[data-qa="signup-name"]').type(text)
    }

    signUpPasswordInput(text){
        return cy.get('[data-qa="signup-email"]').type(text)
    }

    getsignUpButton(){
        return cy.get('[data-qa="signup-button"]')
    }

}

module.exports = LoginPage