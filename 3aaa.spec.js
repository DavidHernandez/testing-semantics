//
describe('Estructura de un test', () => {
    it('tiene un `arrange` u organización', () => {
        // Arrange
        const primerValor = 1
        const segundoValor = 3
    })

    it('tiene un `act` o actuación', () => {
        // Arrange
        const primerValor = 1
        const segundoValor = 3

        // Act
        const resultado = primerValor + segundoValor
    })

    it('tiene un `assert` o comprobación', () => {
        // Arrange
        const primerValor = 1
        const segundoValor = 3

        // Act
        const resultado = primerValor + segundoValor

        // Assert
        expect(resultado).to.equal(4)
    })
})
