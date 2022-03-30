const user = [
    {nombre: 'Enoc', apellido: 'Pineda', edad: 24},
    {nombre: 'Pineda', apellido: 'Aguirre', edad: 23},
]


const traerPrimerInfante = data => {
    const infantes = data.filter(x => x.edad < 24);
    const primerInfante = infantes[0];
    const infante = {
        nombreCompleto : `${primerInfante.nombre} ${primerInfante.apellido}`,
        edad: `${primerInfante.edad}`
    }
    
    return `${infante.nombreCompleto} tiene ${infante.edad}`

}
