// Trabajando con fechas.

const fecha = new Date()

console.log (fecha)

// Inicializar fechas 
// Los meces inicializan desde 0 ( o - enero,11 - Diciembre )
const fecha2 = new Date (1989, 7, 13 )

console.log(fecha2)

const fecha3 = new Date(0)
console.log(fecha3)

const fecha4 = new Date(1000000) // milisegundos 
console.log(fecha4)

const fecha5 = new Date ("October 13, 1979 12:30")
console.log(fecha5)

//Comparar fechas 
console.log(fecha > fecha2) 

console.log(fecha2 > fecha3) // ERRO - No se pueden comparar fechas de esta amnera ==> se deben pasar a milisegundos 

console.log(fecha2.getTime() === fecha5.getTime()) // Ok - Este es la forma de comparar la igualdad entre fechas 

///// Obtener el dia, el mes y el anyo de una feha 
//obtener el dia .getDate()
console.log(fecha2.getDate())

// Obtener el mes .getMonth()
console.log(fecha2.getMonth()+1)

console.log(fecha2.getFullYear())

// Pasar una fecha a un string
// .toLocaleDateString
console.log(fecha2)
console.log(fecha2.toLocaleDateString())
console.log(fecha2.toLocaleDateString("en-Us"))