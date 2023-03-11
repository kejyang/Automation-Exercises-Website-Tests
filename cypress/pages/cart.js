class Cart{

    getFirstProductQuantity(){
        return cy.get('#product-1 > td:nth-child(4) > button:nth-child(1)')
    }

    removeFirstProduct(){
        return cy.get('#product-1 > td:nth-child(6) > a:nth-child(1)').click()
    }

}

module.exports = Cart