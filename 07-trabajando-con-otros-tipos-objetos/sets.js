// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 1, 2, 3, "hola",{id:5}, {id:5}, "hola" ]
const miSet = new Set(array)

console.log({id:5} === {id:5})

console.log(array)
console.log(miSet)

// . add() agregar
miSet.add(9)
console.log(miSet)
miSet.add(5)
console.log(miSet)

// .delete() eliminar 
miSet.delete("hola")
miSet.delete({id:5})

console.log(miSet)

// clear() eliminar todos los elementos
// miSet.clear()
// console.log(miSet)

// .has para busca un valor 
console.log(array.includes(4))
console.log(miSet.has(40))

// .size
console.log(miSet.size)
miSet.forEach(valor => {
   console.log(valor)
})

// iterar 
const it_miSet = miSet.values()
console.log(it_miSet)

// Pasar un Set a un array 
const ar_miSet = [...miSet]
console.log(ar_miSet)
