// Funciones aincronas 

function miAsinc (){
   // Funcion que hace una llamada a una base de datos.
   //Puede darnos algun error.

}
// definicion de promesas 
const miPromesa = new Promise((resolve, reject) => {
   // Si esta todo correcto
   const i = Math.floor(Math.random() * 2)
   if (i !== 0){
      resolve()
   }else {
      reject()
   }
}) 

// como podemos consumir estas promesas 
miPromesa
   .then(()=> console.log("Se ha ejecutado de forma correcta"))
   .catch(()=> console.log("ERROR"))
   .finally(()=>console.log("finalizo"))

// Posteriormente async await

   
