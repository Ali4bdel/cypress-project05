import Pagination from '../../pages/Pagination';
const { Then, Given, When } = require('@badeball/cypress-cucumber-preprocessor')
const pagination = new Pagination()

Given(/^the user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

Then(/^the user should see the "([^"]*)" heading$/, (text) => {
  if (text === 'Pagination') pagination.HeadingLocator().should('have.text', text)
  else pagination.WorldHeading().should('have.text', text)
})

Then(/^the user should see the "([^"]*)" paragraph$/, (text) => {
  pagination.Sentencelocator().should('have.text', text).and('be.visible')
})

Then(/^the user should see the "([^"]*)" button is disabled$/, (btn) => {
  if (btn === 'Previous') pagination.PreviousBtn().should('not.be.enabled')
  else if (btn === 'Next') pagination.NextBtn().should('not.be.enabled')
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (btn) => {
  if (btn === 'Next') pagination.NextBtn().should('be.enabled')
  else if (btn === 'Previous') pagination.PreviousBtn().should('be.enabled')
})

When(/^the user clicks on the "([^"]*)" button$/, (btn) => {
  if (btn === 'Next') pagination.NextBtn().click()
})

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (btn) => {
  if (btn === 'Next') pagination.clickIfEnabled()
})

Then(/^the user should see "([^"]*)" City with the info below and an image$/, (city, dataTable) => {
  const info = dataTable.rawTable.flat()
  pagination.CCPlocator().first().should('have.text', `City: ${city}`)
  pagination.CCPlocator().each(($el, index) => {
    cy.wrap($el).should('have.text', info[index])
  })
})