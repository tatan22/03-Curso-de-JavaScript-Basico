// Trabajar con metodos mas avanzados 
// .map() .fliter() .reduce()

const array = ["San Sebastian", "Madrd", "Barcelona", "Alicante", "Bilbao"];
const val = array.forEach(v => {
   console.log(v);
   return 4
})

console.log(val)

const newArray = array.map((valor, indice) => {
   console.log(indice);
   return `${indice + 1} - ${valor}`
})
console.log(newArray);

// forma corta 

const newArray2 = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray2); 

const listaObjetos = [
   {nombre:"leire", edad: 35},
   {nombre:"Gorka", edad: 34},
   {nombre:"Miguel", edad: 28},
   {nombre:"Lucia", edad: 3},
   {nombre:"Amaia", edad: 29},
]

// const personasMayores = listaObjetos.filter(obj => {
//    if (obj.edad > 30) {
//       return true
//    }else {
//       return false 
//    }
// })

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log (personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista);

// Uso de reduce
const valores = [3, 56, 23 , 5, 90, 100];

const suma = valores.reduce((acumulado, cur, i, arrayOriginal)=> {
   console.log(acumulado);
   console.log(cur);
   console.log(i);
   console.log(arrayOriginal);
   return acumulado + cur;
})
console.log(suma)
