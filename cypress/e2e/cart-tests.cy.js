import Navbar from "../pages/navbar"
import Products from "../pages/products"
import ProductPage from "../pages/productPage"
import Cart from "../pages/cart"

const navbar = new Navbar()
const products = new Products()
const productPage = new ProductPage()
const cart = new Cart()

describe('Login tests', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })

    it('Add item to cart', () =>{
        navbar.getProductsLink().click()
        products.addFirstProductToCart()
        cy.get('.close-modal').click()
        products.addSecondProductToCart()
        cy.get('.close-modal').click()
        navbar.getCartLink().click()
        cy.contains('Blue Top')
        cy.contains('Men Tshirt').should('contain', 'Men Tshirt')
    })   

    it('Verify quantity in cart', () =>{
        navbar.getProductsLink().click()
        products.getFirstProductLink().click()
        productPage.getQuantityElement().clear()
        productPage.getQuantityElement().type(`${'4'}`)
        productPage.getAddToCartButton().click()
        cy.get('.close-modal').click()
        navbar.getCartLink().click()
        cart.getFirstProductQuantity().should('contain', '4')
    }) 

    it('Remove item in cart', () =>{
        navbar.getProductsLink().click()
        products.addFirstProductToCart()
        cy.get('.close-modal').click()
        navbar.getCartLink().click()
        cart.removeFirstProduct()
        cy.contains('Blue Top').should('not.exist')
    })   
})