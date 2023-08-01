// Que son las funcines , como se declaran y como de utilizan 

function saludar (parametr_1, parametro_2, paremtro_3){
   console.log ("Hola ")
}
function saludar (nombre){
   console.log ("Hola " + nombre)
}

function despedir(nombre){
   nombre = "Diego"
   console.log(`Adios ${nombre}`)
}

const nom = "jhonatan"
let nom2 = "juan"

saludar(nom)
saludar ("pedro")

// dato primitivo 
despedir(nom2)

// pasando un Objeto 
let persona = {nombre: "juan", apellido:"Gonzales "}
console.log(persona)
saludarPersona(persona)
console.log(persona)

function saludarPersona(objeto){
   objeto.apellido = "Rodriguez"
   console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludar()
//////////////////////////////////////////
function imprimeNumero(numero = 1) { //Parametros por defecto 
   console.log(numero)
}
imprimeNumero(7)
imprimeNumero()

///////////////////////
// Factor de propagacion 
function imprimir(...parametro){
   console.log(parametro)
}
imprimir(1, 2, 3, "hola", {nombre: "juan", apellido:"Gonzales "})

function suma(...num) {
   return (num.reduce((a, b) => a + b))
}
const s = suma(1, 2, 3, 4, 10)
console.log(s)

//////
let variable_externa = "hola"
function multiplicar (a = 0, b = 0){
   console.log(variable_externa)
   let variable_interna = "saludo"
   return a * b
}

console.log(multiplicar(4, 9))
//console.log(variable_interna) en esta caso no puede acceder 