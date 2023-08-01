// funciones de tipo flecha - funciones anonimas 

const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map(function(valor) {
   return valor * 2
})
console.log(array2)

const array3 = array.map((valor)=>  valor * 3)

console.log(array3)

// para llamar una funcion tipo flecha se puede guardar dentro de una variable 

console.log(doble(9))
const dobleDelValor = valor => {
   return valor *2 
}
console.log(dobleDelValor(7))

const dobleDelValor2= valor => valor *2 
console.log(dobleDelValor2(6))

function doble(valor){
   return valor * 2
}

const array4 = array.map(dobleDelValor)
console.log(array4)



// las funcione de tipo fuction y las var se pueden inicializar en cualquier parte del codigo, las tipo flecha solo se pueden acceder despues de inicializadas 