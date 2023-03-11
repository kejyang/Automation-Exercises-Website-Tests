class Products{

    getAllProductsTitle(){
        return cy.get('.title')
    }

    getProductsListElement(){
        return cy.get('.features_items')
    }

    getFirstProductLink(){
        return cy.get('div.col-sm-4:nth-child(3) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)')
    }

    addFirstProductToCart(){
        return cy.get('div.col-sm-4:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)').click()
    }

    getSecondproductLink(){
        return cy.get('div.col-sm-4:nth-child(4) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)')
    }

    addSecondProductToCart(){
        return cy.get('div.col-sm-4:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)').click()
    }

    inputProductSearch(text){
        return cy.get('#search_product').type(text)
    }

}

module.exports = Products