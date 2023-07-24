// Metodos mas utilizados con cadenas de caracteres
// Como obtener la longitud de un String
let str = "hola soy un string";
console.log(str.length);

// obtener partes de cadenas de caracteres
// slice() substring() substr()
let slice_str = str.slice(0, 10);
console.log(slice_str);

let substrin_str = str.substring(5, 10);
console.log(substrin_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

// Remplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Jhonatan";
console.log(cadena.replace("Jhonatan" , "miguel"));
// Al utilizar strings solo reemplaza la primera instacia

let texto_largo = "Tito no es un mono cualquiera . A Tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasar por el bosque, oler las flores recoger las nueces que se caen de los arboles."

// Al utilizar strings solo remplaza la primer instancia 
console.log(texto_largo.replace('los','cinco'));

// Al utilizar la expresion regular /g (global), reemplaza todas las instancias 
console.log(texto_largo.replace(/los/g, 'cinco'))