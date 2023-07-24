//Metodo de cadena de texto (parte 3)
// https://regexr.com para practicar expreciones regulares.

let texto_largo = "Tito no es un mono cualquiera . A Tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasar por el bosque, oler las flores recoger las nueces que se caen de los arboles."

//Vamos a buscar cuantas veces aparece la palabra "los"
console.log(texto_largo.match(/los/g));

// Saber si el texto contiene un palabra 
console.log(texto_largo.includes('prefiere'));

//Saber si un texto empieza con una palabra o termina con una palabra
// Estos dos metodo son text sensity
console.log(texto_largo.startsWith("Tito"));
console.log(texto_largo.endsWith("arboles."));