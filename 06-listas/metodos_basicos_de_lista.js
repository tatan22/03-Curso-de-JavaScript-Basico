// Como trabajar con listas (areglos. arrays, etc )
let array = [1, 2, 3, 4, 5,];
let var1 = 45;
let array2 = [1, 'hola', false, null, undefined, {id:5}, var1]

//Como acceder a los valores de un array a travez de su posicion.
// Aray[indice] ==> 0, 1, 2, 3, 4, .....
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]);
console.log(array2[3]);

// Metodo para introducir nuevos valores en nuestros arrays
//.push( ) .unshift() ==> Mutan el valor de nuestro array 
// valores al final --> Push
array.push("final", 45, 100, false);
console.log(array);

array.unshift("inicio");
console.log(array);

// Metodo para eliminar valores en nuestro arrays 
// .pop() .shift

const array3 = [1, 3, "hola", false]
//Valor Al Principio -->
array.pop(array3);
console.log(array3);

// Metod para eliminar , modificar o anadir valores en nuestro array
// .splice(x, y, z)
const array4 = [1, 2, 3, 4, 5, 6];

// Eliminar cvalores .splice(indice, numValoresAEliminar)
array4.splice(2,3)
console.log(array4);

// Añadir valores con .splice(incice, 0, valores)
array4.splice(2, 0, "hola")
console.log(array4);

// Modificar Valores 
array4.splice(2, 1, 3);
console.log(array4)

