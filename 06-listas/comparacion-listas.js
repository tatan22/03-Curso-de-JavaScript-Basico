// como podemos comparar listas 
// .every()
const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40]

// const resultado = array.every(valor =>{
//    if (typeof valor === "number"){
//       return true
//    }else {
//       return false
//    }
// })

const resultado = array.every(valor => valor > 0)

console.log(resultado);

// comparacion de listas 
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]
const ar3 = [1, 2, 3, 5]

console.log (ar1 === ar2);
console.log (ar1 === ar1);

// const compararArrays = (array_1, array_2) => {
//    if (array_1.length !== array_2.length) return false
//    const res = array_1.every((valor, i) => {
//       if(valor === array_2[i]) return true 
//       return false 
//    })
// }

const compararArrays = (array_1, array_2) => {
   if (array_1.length !== array_2.length) return false
   const res = array_1.every((valor, i) => valor === array_2[i])
   return res
}
console.log(compararArrays(ar1, ar2))
console.log(compararArrays(ar1, ar3))
