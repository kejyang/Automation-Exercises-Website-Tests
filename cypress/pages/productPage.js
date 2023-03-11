class ProductPage{

    getQuantityElement(){
        return cy.get('#quantity')
    }

    getAddToCartButton(){
        return cy.get('button.btn:nth-child(5)')
    }

    inputNameReview(text){
        return cy.get('#name').type(text)
    }

    inputEmailReview(text){
        return cy.get('#email').type(text) 
    }

    inputReviewText(text){
        return cy.get('#review').type(text) 
    }

    getSendReviewButton(){
        return cy.get('#button-review')
    }

}

module.exports = ProductPage