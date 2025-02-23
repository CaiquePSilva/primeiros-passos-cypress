import userData from '../fixtures/userData.json'

describe('orange HRM tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    employeeIdField: ".oxd-input",
    otherIdField: ".oxd-input",
    driversLiscenseField: ".oxd-input",
    licenseExpiryDateField: ".oxd-input",
    birthDateField: ".oxd-input",
    dateCloseButton: ".--close",
    dateCloseButton2: ".--close",
    saveButton: "[type='submit']",
    Body: "body"

  }

  it.only('user info Update', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Bino')
    cy.get(selectorsList.middleNameField).clear().type('Boleia')
    cy.get(selectorsList.lastNameField).clear().type('da Silva')
    cy.get(selectorsList.employeeIdField).eq(4).clear().type('130520')
    cy.get(selectorsList.otherIdField).eq(5).clear().type("431348")
    cy.get(selectorsList.driversLiscenseField).eq(6).clear().type('49661')
    cy.get(selectorsList.licenseExpiryDateField).eq(7).clear().type("2030-05-08")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.birthDateField).eq(8).clear().type("1997-05-08")
    cy.get(selectorsList.dateCloseButton2).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get(selectorsList.Body).should('contain', 'Successfully Updated')

  })
  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert).contains('Invalid credentials')
  })
})