# Automation-Exercises-Website-Tests

These are automated test cases for the website https://www.automationexercise.com/. The End to End tests are written in Cypress while the api tests used
Postman. 

Set Up
----

__Setting Up the End to End tests__ 

1. Clone the respository into a folder
2. Using a terminal go into the repository and run npm init and then npm install cypress --save-dev
3. Then run npm run cypress:open
4. This window should pop up. Click E2E Testing
 ![image](https://user-images.githubusercontent.com/38774593/224465326-0f03f77c-5a4a-425d-8f0a-46a9a8034ceb.png)
5. After, pick the preferred browser. 
6. ![image](https://user-images.githubusercontent.com/38774593/224465726-b948acf0-187c-4a18-9270-ab5b72c539fe.png)
Select any of the test suites under the cypress/e2e folder to run the test cases related to the feature.

__Setting Up API tests__ 

1. 


End to End Tests
----

The End to End tests follow the POM design pattern. There is a page folder that has classes that have methods that allow you to get or manipulate the ui objects
of that page. For example the login.jy page has methods that allow the user to input text into the the designated areas and also allows the user to push the login
button.

Test Cases
----

Login/Signup
----
__Register User__

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

__Login User with correct email and password__

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Delete Account' button
10. Verify that 'ACCOUNT DELETED!' is visible

__Login with incorrect info__

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible


__Logout User__

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Logout' button
10. Verify that user is navigated to login page


__Register User with existing email__

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible








