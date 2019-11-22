class Search {
    constructor() {
        cy.visit('https://start.duckduckgo.com')
    }

    searchString(text) {
        this.fillForm(text)
        this.submitForm()
    }

    searchByDomain(text, domain) {
        const search = `${text} site:${domain}`

        this.fillForm(search)
        this.submitForm()
    }

    fillForm(text) {
        const formInput = '#search_form_input_homepage'

        cy.get(formInput)
            .type(text, {force: true})
    }

    submitForm() {
        const formSubmit = '#search_button_homepage'

        cy.get(formSubmit)
            .click({force: true})
    }

    getResult(text) {
        const results = '.result__url'

        return cy.get(results)
            .contains(text)
    }
}

module.exports = {Search}
