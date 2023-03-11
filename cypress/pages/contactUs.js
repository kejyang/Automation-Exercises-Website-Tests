class ContactUs{

    nameInput(text){
        return cy.get('[data-qa="name"]').type(text)
    }

    emailInput(text){
        return cy.get('[data-qa="email"]').type(text)
    }

    subjectInput(text){
        cy.get('[data-qa="subject"]').type(text)
    }

    messageInput(text){
        cy.get('[data-qa="message"]').type(text)
    }

    getSubmitButton(){
        return cy.get('[data-qa="submit-button"]')
    }

}

module.exports = ContactUs