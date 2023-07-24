// Metodo de  cadena de texto (parte2)
let  input = "Escorpio";
let db = "escopio";

// toLowerCase( ) - toUpperCase()
console.log (input === db);
console.log (input.toLowerCase());
console.log (input.toUpperCase());
// Para idiomas con compartamientos distintos 
console.log (input.toLocaleLowerCase());
console.log (input.toLocaleUpperCase());
console.log (input.toLowerCase === db.toLowerCase);

//Formas de concatenar cdenas de caracteres 
let str_1 = "hola soy la primera cadena.";
let str_2 = "hola soy la segunda cadena";

console.log(str_1.concat(" ",str_2));
console.log(str_1 +" " +str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final 
let str_3 = "  Hola soy un string con espacios al final.   "
console.log(str_3.length);
//Elimina espacios inicio y final 
console.log(str_3.trim().length);

// elimina solo del inicio
console.log(str_3.trimStart().length);

// eliminar solo espacio del inicio 
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posicion 
let str_4 = "Hola soy el string numero 4"

console.log(str_4.charAt(4));
console.log(str_4[5]);

// )btener la posicion de una palabra detro de una cadena de caracteres 
let str_5 = "Hola soy jhonatna y soy ingeniero, Mi nombre es jhonatan Cardona"

// Nos pasa la posicion de la primera instancia 
console.log(str_5.indexOf("jhonatna"))
console.log(str_5.indexOf("Pedro")); // si no lo encuntra entrega un negativo
console.log(str_5[9]);
// Nos pasa la posision de la ultima instancia
console.log(str_5.lastIndexOf("jhonatna"));

