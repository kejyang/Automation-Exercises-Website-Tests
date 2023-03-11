import Navbar from "../pages/navbar"
import LoginPage from "../pages/login"
import SignUpForm from "../pages/signUpForm"

const navbar = new Navbar()
const loginPage = new LoginPage()
const signUpForm = new SignUpForm()

describe('Login tests', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })

    it('Register User', () =>{
        navbar.getLoginLink().click()
        cy.contains('New User Signup!')
        loginPage.signUpEmailInput('bob')
        loginPage.signUpPasswordInput('testemail1@gmail.com')
        loginPage.getsignUpButton().click()
        signUpForm.passwordInput('1234')
        signUpForm.firstNameInput('bob')
        signUpForm.lastNameInput('bee')
        signUpForm.addressInput('test address')
        signUpForm.countrySelect().select(1)
        signUpForm.stateInput('CA')
        signUpForm.cityInput('test city')
        signUpForm.zipcodeInput('123456')
        signUpForm.mobileNumberInput('0987654321')
        signUpForm.getCreateAccountButton().click()
        cy.get('[data-qa="account-created"]')
        cy.get('[data-qa="continue-button"]').click()
        cy.contains('Logged in as bob').should('contain', 'Logged in as bob')
        cy.contains('Delete Account').click()
        cy.get('[data-qa="account-deleted"]')
        cy.get('[data-qa="continue-button"]').click()
    })  

    it('Login User', () =>{
        navbar.getLoginLink().click()
        cy.contains('Login to your account')
        loginPage.loginEmailInput('testemail2@gmail.com')
        loginPage.loginPasswordInput('test')
        loginPage.getLoginButton().click()
        cy.contains('Logged in as bobby').should('contain', 'Logged in as bobby')
        cy.contains('Logout').click()
    }) 

     it('Login User Wrong Info', () =>{
        navbar.getLoginLink().click()
        cy.contains('Login to your account')
        loginPage.loginEmailInput('asdfdgdrs@gmail.com')
        loginPage.loginPasswordInput('sertgfd')
        loginPage.getLoginButton().click()
        cy.contains('Your email or password is incorrect!').should('contain', 'Your email or password is incorrect!')
    }) 

    it('Logout User', () =>{
        navbar.getLoginLink().click()
        cy.contains('Login to your account')
        loginPage.loginEmailInput('testemail2@gmail.com')
        loginPage.loginPasswordInput('test')
        loginPage.getLoginButton().click()
        cy.contains('Logged in as bobby')
        navbar.getLogoutLink().click()
        cy.contains('New User Signup!').should('contain', 'New User Signup!')
    })  

    it('Register Already Existing User', () =>{
        navbar.getLoginLink().click()
        cy.contains('New User Signup!')
        loginPage.signUpEmailInput('bobby')
        loginPage.signUpPasswordInput('testemail2@gmail.com')
        loginPage.getsignUpButton().click()
        cy.contains('Email Address already exist!').should('contain', 'Email Address already exist!')
    })   
})