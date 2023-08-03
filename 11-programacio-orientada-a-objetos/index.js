const persona = {
   nombre: "Jhonatan",
   edad: 34,
   isDeveloper: true,
   saludo: function (){
      console.log("hola")
   }
}

console.log(persona)//
persona.saludo()

// crear otra persona 
const otraPersona = {
   nombre: "Miguel",
   edad: 15,
   isDeveloper: false,
   saludo: function (){
      console.log("hola")
   }
}

otraPersona.saludo()

// cracion de constructor 

// Factory function
const crearPersonas = (nombre, edad, isDeveloper ) => {
   return {
      nombre, // es igual a --> nombre: nombre
      edad,
      isDeveloper,
      saludo: function () {
         console.log('helo')
      }

   }
}

const nuevaPersona = crearPersonas("juan", 29, true)
console.log(nuevaPersona)

const nuevaPersona2 = crearPersonas("Pedor", 60, false)
console.log(nuevaPersona2)

