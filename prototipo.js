const perro = {
    raza: 'killterrier',
    ladrar: function(){
        console.log(`Guau!!! Soy un perro ${this.raza}`)
    }
}

const Solovino = Object.create(perro);

Solovino.ladrar();