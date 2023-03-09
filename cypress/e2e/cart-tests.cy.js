describe('Login tests', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })

    /* it('Add item to cart', () =>{
        cy.contains('Products').click()
        cy.get('div.col-sm-4:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)').click()
        cy.get('.close-modal').click()
        cy.get('div.col-sm-4:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)').click()
        cy.get('.close-modal').click()
        cy.contains('Cart').click()
        cy.contains('Blue Top')
        cy.contains('Men Tshirt').should('contain', 'Men Tshirt')
    })  */

    it('Verify quantity in cart', () =>{
        cy.contains('Products').click()
        cy.get('div.col-sm-4:nth-child(3) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').click()
        cy.get('#quantity').clear()
        cy.get('#quantity').type(`${'4'}`)
        cy.get('#quantity').should('have.value', '4')
    }) 
})