//Principales operaciones aritmeticas 
let a = 3.5;
let b = 4.8;
// suma (+)
console.log(a + b);

//Resta (-)
console.log(a - b);

//Multiplicacion (*)
console.log(a * b);

// Divisin (/)
console.log(a / b);

//Representacion de los numeros en cadenas de texto

console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s)

//Redondear numeros decimales 
let c = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d);
let e = 1839.1234;
let f = 2213556153215;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// .toFixed --> limitar el numero de decimales a l valor asignado 
console.log(d.toFixed(2));// numero de cifras decimales
console.log(typeof d.toFixed(3));

//.toPrecision()--> limita el numero de cifras significativas 
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(7));
