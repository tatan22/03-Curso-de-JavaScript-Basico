const Logger = require("nodemon/lib/utils/log");

//operador .valueOf() ; Obtener valores numericos a partir de literales.
let a = 2;
let b = new Number(3) //--> Estoy casteando dentro de b lo obligo a ser numerico

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());
let str = new String("Hola soy un string")
console.log(str); // Castear
console.log(str.valueOf());

// NaN (Not a Number)- Infinity 
let n = Number('adios')
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor  = 0;
let divisor_2 = null;

console.log (numerador/divisor);
console.log (numerador/divisor_2);

// Como convertir los string a  valores numericos con Number, parseInt y parseFloat

let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); 

console.log(Number(numero) + num2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

let num3 = 4;
console.log(parseFloat(num3));
console.log(parseInt(num3));

//Numeros Hexadecimales (base 16)
let numHex = '0x3a5b7'
console.log(parseInt(numHex,16))

// Obtener los valores maximo y minimo en javascript
let min_precision = Number.EPSILON
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;
console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
console.log(2 ** 1023)

