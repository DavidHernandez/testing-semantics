// Las aserciones es como comprobamos que algo es correcto.
// Hay varias maneras de hacer aserciones.
// La sintaxis cambia, el resultado es el mismo.

// Referencias:
// https://www.chaijs.com/guide/styles/
// https://docs.cypress.io/guides/references/assertions.html
describe('Estilos de aserciones', () => {
    // https://www.chaijs.com/api/assert/
    context('Asserts', () => {
        it('Compara si dos valores son iguales', () => {
            const firstValue = 1
            const secondValue = 1

            assert.equal(firstValue, secondValue)
        })

        it('Comprueba si un valor es de un determinado tipo', () => {
            const aValue = 'text'

            assert.typeOf(aValue, 'string')
        })

        it('Comprueba si un string es de una longitud determinada', () => {
            const aString = 'text'

            assert.lengthOf(aString, '4')
        })

        it('Permite añadir comentarios en las comprobaciones', () => {
            const aValue = Math.random()

            assert.equal(aValue, aValue, 'Ambos valores son iguales')
        })
    })

    // https://www.chaijs.com/api/bdd/
    context('Expects', () => {
        it('Compara si dos valores son iguales', () => {
            const firstValue = 1
            const secondValue = 1

            expect(firstValue).to.equal(secondValue)
        })

        it('Comprueba si un valor es de un determinado tipo', () => {
            const aValue = 'text'

            expect(aValue).to.be.a('string')
        })

        it('Comprueba si un string es de una longitud determinada', () => {
            const aString = 'text'

            expect(aString).to.have.lengthOf(4)
        })

        it('Permite añadir comentarios en las comprobaciones', () => {
            const aValue = Math.random()

            expect(aValue, 'Ambos valores son iguales').to.be.equal(aValue)
        })
    })
})
