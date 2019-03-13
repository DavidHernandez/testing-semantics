describe('A search engine', () => {
    it('can find results based on a string', () => {
        // Arrange
        cy.visit('https://start.duckduckgo.com')
        const searchTerm = 'cypress e2e testing'
        const formInput = '#search_form_input_homepage'
        const formSubmit = '#search_button_homepage'
        const results = '.result__url'

        // Act
        cy.get(formInput)
            .type(searchTerm, {force: true})
        cy.get(formSubmit)
            .click({force: true})
        cy.get(results)
            .contains('https://www.cypress.io')

        // Arrange
            .should((element) => {
                expect(element).to.exist
            })
    })

    it('can find results on a domain', () => {
        // Arrange
        cy.visit('https://start.duckduckgo.com')
        const searchTerm = 'assertions site:cypress.io'
        const formInput = '#search_form_input_homepage'
        const formSubmit = '#search_button_homepage'
        const results = '.result__url'

        // Act
        cy.get(formInput)
            .type(searchTerm, {force: true})
        cy.get(formSubmit)
            .click({force: true})
        cy.get(results)
            .contains('https://docs.cypress.io/guides/references/assertions.html')

        // Arrange
            .should((element) => {
                expect(element).to.exist
            })

    })
})
