// Carga y sobrecarga de Funciones 
function saludar(){
   hola()
}

function hola (){
   console.log("hola soy una funcion hola ")
}

saludar ()
/// Lo que hace le interprete 
// 1. carga la funcion global()
// 2  saludar() globnal()
// 4. hola() saludar() global()
// 5. global()

function recursivo (){
   recursivo()
}
// recursivo