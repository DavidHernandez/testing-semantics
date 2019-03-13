// Un describe por fichero.
// Describe una funcionalidad.
describe('Una app de reloj despertador', () => {
    // Puede haber multiples contextos por describe o solo uno.
    // En caso de que solo haya uno, se puede obviar.
    // Un caso de uso especifico de la funcionalidad
    context('Una alarma recurrente por las manyanas', () => {
        // Multiples `it` por test.
        // Cada una de las partes que integran la funcionalidad.
        it('Crea una alarma recurrente', () => {

        })

        it('Suena la alarma, cuando llega la hora', () => {

        })

        it('Suena la alarma, al dia siguiente a la misma hora', () => {

        })
    })

    context('Una alarma puntual', () => {
        it('Crea una alarma unica', () => {

        })

        it('Suena la alarma, cuando llega la hora', () => {

        })

        it('Al dia siguiente, la alarma no suena', () => {

        })
    })
})
