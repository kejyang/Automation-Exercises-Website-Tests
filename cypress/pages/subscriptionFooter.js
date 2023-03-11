class SubscriptionFooter{

    emailInput(text){
        cy.get('#susbscribe_email').type(text)
    }

    getSubmitButton(){
        return cy.get('.fa-arrow-circle-o-right')
    }

}

module.exports = SubscriptionFooter