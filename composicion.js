const user = [
    {nombre: 'Enoc', apellido: 'Pineda', edad: 24},
    {nombre: 'Pineda', apellido: 'Aguirre', edad: 23},
]

const head = xs => xs[0];
const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad}`

const traerPrimerInfante = data => formato(formateo(head(data.filter(x => x.edad < 24))));

