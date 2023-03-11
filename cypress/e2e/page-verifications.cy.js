import Navbar from "../pages/navbar"
import ContactUs from "../pages/contactUs"
import SubscriptionFooter from "../pages/subscriptionFooter"
import Products from "../pages/products"

const navbar = new Navbar()
const contactUs = new ContactUs()
const subscriptionFooter = new SubscriptionFooter()
const products = new Products()

describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })

    it('Contact Us', () =>{
        navbar.getContactUsLink().click()
        cy.contains('Below contact form is for testing purpose.')
        contactUs.nameInput('bobby')
        contactUs.emailInput('testemail2@gmail.com')
        contactUs.subjectInput('test subject')
        contactUs.messageInput('test message')
        contactUs.getSubmitButton().click()
        cy.contains('Success! Your details have been submitted successfully.').should('contain', 'Success! Your details have been submitted successfully.')
    }) 

    it('All products and product page', () =>{
        navbar.getProductsLink().click()
        /* cy.get('.title')
        cy.get('.features_items')
        cy.get('div.col-sm-4:nth-child(3) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').click() */
        products.getAllProductsTitle()
        products.getProductsListElement()
        products.getFirstProductLink().click()
        cy.contains('Blue Top').should('contain', 'Blue Top')
    }) 

    it('Search', () =>{
        navbar.getProductsLink().click()
        /* cy.get('.title')
        cy.get('.features_items') */
        products.getAllProductsTitle()
        products.getProductsListElement()
        products.inputProductSearch('Blue Top')
        /* cy.get('#search_product').type(`${'Blue Top'}`) */
        cy.contains('Blue Top').should('contain', 'Blue Top')
    }) 

    it('Subscription', () =>{
        /* cy.get('#susbscribe_email').type(`${'testemail2@gmail.com'}`)
        cy.get('.fa-arrow-circle-o-right').click() */
        subscriptionFooter.emailInput('testemail2@gmail.com')
        subscriptionFooter.getSubmitButton().click()
        cy.contains('You have been successfully subscribed!').should('contain', 'You have been successfully subscribed!')
    }) 

    it('Subscription cart', () =>{
        navbar.getCartLink().click()
        /* cy.get('#susbscribe_email').type(`${'testemail2@gmail.com'}`)
        cy.get('.fa-arrow-circle-o-right').click() */
        subscriptionFooter.emailInput('testemail2@gmail.com')
        subscriptionFooter.getSubmitButton().click()
        cy.contains('You have been successfully subscribed!').should('contain', 'You have been successfully subscribed!')
    })  

})