class Persona {
   nombre;
   edad;
   isDeveloper;
   // metodo constructor
   constructor(nombre, edad, isDeveloper ){
      // atributos
      this.nombre = nombre
      this.edad = edad
      this.isDeveloper = isDeveloper
   }
   //Metodos
   saludo() {
      console.log(`Hola, mi nombre es ${this.nombre} tengo ${this.edad} a;os`)
   }
}

const nuevaPersona = new Persona("Jhonatan", 34, true)
console.log(nuevaPersona)
nuevaPersona.saludo()

let numero = 60 // estoy inicializando una variable 
console.log(typeof numero)

 let persona2 = new Persona("maria", 18, false) // instanciar 
console.log(typeof persona2)
console.log(persona2 instanceof Persona)
 // operador instanceof -- similar a typeof pero para clases 