// Inheritance - Herencia 
class Persona {
   _nombre
   _edad
   constructor(nombre, edad ){
      this._nombre = nombre
      this._edad = edad
   }
   //Metodos
   saludo() {
      console.log(`Hola, mi nombre es ${this._nombre} tengo ${this._edad} a;os`)
   }
}
class Desarrollador extends Persona {
   constructor(nombre, edad , lenguaje){
      super(nombre, edad)
      this.lenguaje = lenguaje
   }
   saludo() { // Overrida --> Estamos sobreescribiendo el metodo 
      super.saludo() // Para no sobreescribir
      console.log(`y soy desarrollaror de ${this.lenguaje}`)
   }
}
const nuevodev = new Desarrollador("Jhonatan", 34, "javaScript")
console.log(nuevodev)
nuevodev.saludo()

// Polimorfismo ==> Varias formas 
