describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })

    it('Contact Us', () =>{
        cy.contains('Contact us').click()
        cy.contains('Below contact form is for testing purpose.')
        cy.get('[data-qa="name"]').type(`${'bobby'}`)
        cy.get('[data-qa="email"]').type(`${'testemail2@gmail.com'}`)
        cy.get('[data-qa="subject"]').type(`${'test subject'}`)
        cy.get('[data-qa="message"]').type(`${'test message'}`)
        cy.get('[data-qa="submit-button"]').click()
        cy.contains('Success! Your details have been submitted successfully.')
    }) 

    it('All products and product page', () =>{
        cy.contains('Products').click()
        cy.get('.title')
        cy.get('.features_items')
        cy.get('div.col-sm-4:nth-child(3) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').click()
        cy.contains('Blue Top').should('contain', 'Blue Top')
    }) 

    it('Search', () =>{
        cy.contains('Products').click()
        cy.get('.title')
        cy.get('.features_items')
        cy.get('#search_product').type(`${'Blue Top'}`)
        cy.contains('Blue Top').should('contain', 'Blue Top')
    }) 

    it('Subscription', () =>{
        cy.get('#susbscribe_email').type(`${'testemail2@gmail.com'}`)
        cy.get('.fa-arrow-circle-o-right').click()
        cy.contains('You have been successfully subscribed!').should('contain', 'You have been successfully subscribed!')
    }) 

    it('Subscription cart', () =>{
        cy.contains('Cart').click()
        cy.get('#susbscribe_email').type(`${'testemail2@gmail.com'}`)
        cy.get('.fa-arrow-circle-o-right').click()
        cy.contains('You have been successfully subscribed!').should('contain', 'You have been successfully subscribed!')
    }) 

})