class Persona {
   // Privado --> #
   // Solo se puede acceder desde dentro de la clase 
   #nombre
   #edad

   // Protected --> _
   // Solo se puede acceder desde dentro de la clase y desde clases decendientes
   _isDeveloper = true

   constructor(nom, edad ){
      this.#nombre = nom
      this.#edad = edad
   }
   //Metodos
      saludo() {
         console.log(`Hola, mi nombre es ${this.nombre} tengo ${this.edad} a;os`)
      }
      obtenNombre(){ // Funcion getter --> nos permite acceder de forma controlada a algun atributo protegido 
         return this.#nombre
      }
      #obtenEdad(){
         return this.#edad
      }

      getEdad(){
         return this.#edad
      }
      setEdad(nuevaEdad){
         this.#edad = nuevaEdad
      }
}

const persona = new Persona("jhonatan", 40)
// console.log(persona)
// console.log(persona.nombre)
// console.log(persona.edad)
// persona.saludo()

// console.log(persona.#obtenNombre())
// console.log(persona.obtenEdad())


//########################### 
// Getter --> Metodo que nos permite obtener atributos/metodos privados o protegidos

const edad = persona.getEdad()
console.log(edad)

//Setter --> Metodos que nos permite cambiar el valor de algunos de los atributos privados o protegidos 
// Quiero cambiar la edad de persona.

persona.setEdad(34)
console.log(persona.getEdad())