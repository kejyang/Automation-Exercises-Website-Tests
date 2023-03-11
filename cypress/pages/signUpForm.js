class SignUpForm{

    passwordInput(text){
        return cy.get('[data-qa="password"]').type(text)
    }

    firstNameInput(text){
        return cy.get('[data-qa="first_name"]').type(text)
    }

    lastNameInput(text){
        return cy.get('[data-qa="last_name"]').type(text)
    }

    addressInput(text){
        return cy.get('[data-qa="address"]').type(text)
    }

    countrySelect(){
        return cy.get('[data-qa="country"]')
    }

    stateInput(text){
        return cy.get('[data-qa="state"]').type(text)
    }

    cityInput(text){
        return cy.get('[data-qa="city"]').type(text)
    }

    zipcodeInput(text){
        return cy.get('[data-qa="zipcode"]').type(text)
    }

    mobileNumberInput(text){
        return cy.get('[data-qa="mobile_number"]').type(text)
    }

    getCreateAccountButton(){
        return cy.get('[data-qa="create-account"]')
    }


}

module.exports = SignUpForm