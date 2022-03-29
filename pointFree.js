const f  = (ruta, cb) => {
    const resultado = computacionPesada();
    cb(resultado);
}

const manejarResultado = (resultado) => {

}

f('/users', resultado => manejarResultado(resultado))