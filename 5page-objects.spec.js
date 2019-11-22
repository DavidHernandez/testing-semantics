import {Search} from './Search.js'

describe('A search engine', () => {
    let searchPage

    beforeEach(() => {
        searchPage = new Search()
    })

    it('can find results based on a string', () => {
        // Arrange
        const searchTerm = 'cypress e2e testing'
        const expectedResult = 'https://www.cypress.io'

        // Act
        searchPage.searchString(searchTerm)

        // Assert
        searchPage.getResult(expectedResult)
            .should((element) => {
                expect(element).to.exist
            })
    })

    it('can find results on a domain', () => {
        // Arrange
        const searchTerm = 'assertions'
        const domain = 'cypress.io'
        const expectedResult = 'https://docs.cypress.io/guides/references/assertions.html'

        // Act
        searchPage.searchByDomain(searchTerm, domain)

        // Assert
        searchPage.getResult(expectedResult)
            .should((element) => {
                expect(element).to.exist
            })
    })
})
