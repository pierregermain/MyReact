class Coche {
    constructor(modelo, velocidad){
       this.modelo = modelo;
       this.velocidad = velocidad;
    }
    aumentarVelocidad(){
        this.velocidad += 1;
    }
    disminurVelocidad(){
        this.velocidad -= 1;
    }
}

var bmw = new Coche('BMW', 200);

console.log(bmw.velocidad);
bmw.aumentarVelocidad();
bmw.aumentarVelocidad();
bmw.aumentarVelocidad();
console.log(bmw.velocidad);

document.write(bmw.velocidad);

// Herencia

class Autobus extends Coche {
    constructor(modelo, velocidad){
        super(modelo,velocidad);
        this.altura = 5;
    }
    mostrarAltura(){
        return "La altura del bus es: "+this.altura;
    }

}

var autobus = new Autobus('Pegasus',120);
console.log(autobus);
console.log(autobus.mostrarAltura());
