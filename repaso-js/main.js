console.log('hola mundo');

// Variables
var nombre = "Pierre";
var altura = 172;

var concatenacion = "Concatenacion: " + nombre + " " + altura;

// Escribir al html
document.write(concatenacion);

// Escribir en un div
var datos = document.getElementById("datos");
datos.innerHTML =  "datos div: " + concatenacion;

// Escribir en un div tipo plantilla
var datos2 = document.getElementById("datos2");
datos2.innerHTML = `<p> Nombre: ${nombre},</p>`;

// ----------------------
// Estructuras de control
// ----------------------

if ((altura) >= 170 ) {
    console.log('Eres alto');
    // Concatenacion en innerHTML
    datos2.innerHTML += '<p>Eres alto</p>';
}
else {
    console.log('eres bajo');
}

for (var i = 2016; i<=2022; i++) {
    console.log(i);
}

//---------------
// Funciones
// --------------

holaMundo(nombre, altura);

function holaMundo(nombre, altura){
    console.log('nombre'+nombre);
    console.log('altura'+altura);
}

function checkName(nombre){
    if (nombre == 'Pierre'){
      return true;
    }
    else {
      return false;
    }
}

// -------
// Arrays
// -------

var nombres = ['Pierre', 'Ikder', 'Antonio']
console.log('>>Acceder a un array');
console.log(nombres[1]);

console.log('>>Acceso a todo el array');
for (i=0; i<nombres.length; i++){
    console.log(nombres[i]);
}

// ------------------
// Funciones callback
// ------------------

document.write('<h2> Callback Normal </h2>');

nombres.forEach(function(anon) {
    document.write(anon + '<br/>');
});

document.write('<h2> Callback con nomenclatura de flecha </h2>');

nombres.forEach((anon) =>  {
    document.write(anon + '<br/>');
});

// ------------
// Objetos Json
// ------------

var coche = {
    modelo: 'Mercedes Clase A',
    maximo: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(coche);
        console.log('mostrarDatos: ',this.modelo,this.maximo,this.antiguedad);
    },
};

document.write("<h1>" + coche.modelo + "</h1>")
document.write("<p>" + coche.antiguedad + "</p>")
document.write("<p>" + coche.maximo + "</p>")

coche.mostrarDatos();

// -------------------------------------------------------
// PROMESAS / PROMISE (Valor disponible ahora, en el futuro o nunca)
// Para sacar datos de forma asíncrona
// ---------------------------------------------------------

// Ejemplo
// Resolve / Reject con timeout de 2000
// -------------------------------------------------------

var saludar = new Promise ((resolve, reject) => {

    setTimeout(() => {
        let saludo = "Hola chicos, mensaje para el resolve";
        //saludo = false;

        if(saludo) {
            resolve(saludo);
        }
        else {
            reject("no hay saludo");
        }

    }, 2000);

});

saludar.then(resultado => {
    alert(resultado);
})
.catch(error => {
    alert(error);
})
