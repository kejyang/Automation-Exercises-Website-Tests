class Navbar{

    getLoginLink(){
        return cy.contains('Signup / Login')
    }

    getLogoutLink(){
        return cy.contains('Logout')
    }

    getProductsLink(){
        return cy.contains('Products')
    }

    getCartLink(){
        return cy.contains('Cart')
    }

    getContactUsLink(){
        return cy.contains('Contact us')
    }
}

module.exports = Navbar