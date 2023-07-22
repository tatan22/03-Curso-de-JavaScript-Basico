// Listas, array o arreglos 
const lista = [1, "hola, true, undefined, null"];
const lista2 = new Array(1, "hola, true, undefined, null");
const lista3 = new Array(4);
lista3[0] = "soy el primer elemento, index 0"
const lista4 = [lista, lista2, lista3]

console.log(lista );
console.log(lista2 );
console.log(lista3 );
console.log(lista4 );

// objetos 
const movil = {
   altura: 10,
   anchura: 5,
   marca: "xiaomi",
   isWhite: false,
   contactos: ["Jhonatan", "Miller", "Carlos"],
   targeta: {
      marca: "sandisk",
      almacenamiento: 32
   },
   "altura-targeta": 4 // Si necesito poner un _ o - lo pongo el atributo entre ""
}
movil.anyo = 2019;
movil.marca = "samsumg";

console.log(movil.targeta.marca);
console.log(movil.anyo);
console.log(movil.marca);

// Fechas 
// ==> librerias de apoyo para fechas Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // utilizado los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 2, 15); // los meses arancan por 0 siendo enero el 0
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();
console.log(dia, mes, anyo);

