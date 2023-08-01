// import {suma, eleva, nombre} from './modulos/matematicas.js'

import *as moduloMatematica from './modulos/matematicas.js'
import getAutor, {libro} from './modulos/literatura.js' // importa todas las funciones 

// const sum = suma(4, 12)
// console.log(sum)

// const potencia = eleva(2, 21)
// console.log(potencia)

// console.log(nombre)

console.log(moduloMatematica.nombre)

console.log(getAutor())
console.log(libro)