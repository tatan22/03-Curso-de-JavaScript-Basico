const miFuncion = valor => {
   if(typeof valor === "number"){
      return valor * 2
   } 
   //return false
   throw new Error("El valor debe ser de tipo numero")
}

const elDoble = miFuncion(4)

const numero = "e"
try {
   //Codigo que puede fallar 
   console.log("Esta ejecutandose de manera correcta")
   const doble = miFuncion(numero)
   console.log(doble)
}catch(e){
   //En caso de que falle, quiero que ejecutes el catch
   console.error(`El valor de e es: ${e}`)
   console.error("ERROR")
}finally {
   console.log("Finalizo el codigo")
}
// Errores predeterminados por js
// InternalError, SyntaxError, TypeError, RangeError Y ReferenceError
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error