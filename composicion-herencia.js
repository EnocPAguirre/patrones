const saludar = nombre => console.log(nombre);


class Persona {
    constructor(){
        this.nombre = 'Enoc';
    }

    saludar(){
        saludar(this.nombre);
    }
}


