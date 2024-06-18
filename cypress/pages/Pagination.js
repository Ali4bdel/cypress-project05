class Pagination {
  HeadingLocator() {
    return cy.get('.is-size-3')
  }

  WorldHeading() {
    return cy.get('#sub_heading')
  }

  Sentencelocator() {
    return cy.get('#content')
  }
  PreviousBtn() {
    return cy.get('#previous')
  }
  NextBtn() {
    return cy.get('#next')
  }

  CCPlocator() {
    return cy.get('.city_info, .country_info, .population_info')
  }

  clickIfEnabled() {
    return this.NextBtn().click().click().click().click({ force: true })
  }
}

export default Pagination