// Seccion 4 - Strings (cadena de caracteres)

let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng = 'Hola soy un texto con comillas simples'


console.log(str_dbl);
console.log(str_sng);


let string_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\" ";
let string_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let string_dobles = "El otro dia me dijo literalmente 've a sacar la basura'";
let string_simples2 = 'El otro dia me dijo literalmente \'ve a sacar la basura\'';

/// comillas Invertida (backticks)

let str_backticks = `Hola soy un texto con comillas backticks`
console.log(str_backticks);

let nombre = "jhonatan";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);

//Plantilla HTML 
let plantilla = `
   <html>
      <h1>Pagina web de ${nombre}</h1>
      <p>Este es un parrafo</p>
   </html>
`
console.log(plantilla);

// introducion de variables en hatml.
let libros = ["Empieza por el por que", "el monje que vendio Su Ferrari", "El poder del ahora"]
