let mixin = {
    saludar(){
        console.log('Hola')
    },
    despedir(){
        console.log('Adiós');
    }
}

class Usuario {
    constructor(nombre){
        this.nombre = nombre;

    }
}


Object.assign(Usuario.prototype, mixin)