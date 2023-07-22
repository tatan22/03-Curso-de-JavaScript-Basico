// Bucle For
// for(inicializacion; condicion; actualizacion){

// }

for (let i= 0; i < 10; i++) {
   console.log(i);
}
let lista = [3, 5, 6, 7, 9, 10, 12]
for (let i= 0; i < lista.length ; i++) {
   console.log(lista[i]);
}

// for of 
for(let valor of lista){
   console.log(valor);
}

// Estructura forEach
lista.forEach(valor =>{
   console.log(valor);
})

//Estrudtura fo
let persona = {
   nombre:"jhonatan",
   apellido:"cardona",
   edad: 33,
   isDeveloper: true
}
let prop = "edad";
console.log(persona[prop])

for( let propiedad in persona){
   console.log(propiedad);
   console.log(persona[propiedad])
}

