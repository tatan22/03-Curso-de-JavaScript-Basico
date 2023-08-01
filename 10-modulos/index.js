// Formas de importar/exportar modulos 
// 1. CommonJS - require
// 2. Import ES6 - import
// const moduloMatematicas = require("./modulos/matematicas")
// const factorial = moduloMatematicas.factorial;
// const {factorial, suma } = moduloMatematicas
// const suma = moduloMatematicas.sum;
// console.log(moduloMatematicas.suma)

const{factorial, suma} = require("./modulos/matematicas")

const fact = moduloMatematicas.factorial(5)
console.log(fact)

const sum = moduloMatematicas.suma(12, 90)
console.log(sum)