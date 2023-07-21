var variable; //=> Var es global afecta todo el codigo 
let VariableLet_; //=> Let es una variable local solo afecta el bloque donde se encuentre 

// const constante;

const constante = "Hola soy una constante";
console.log(constante);
// constante = "adios" => Nos da un error

var a = 1;
console.log(a)

a = 4;
console.log(a);

let b = 10;
console.log(b);

b = 5;
console.log(b);

var variable = " hoa soy una variable VAR"

for(var i = 0; i < 3; i++) {
   var variable ="Soy la segunda variable"
}
console.log(variable)

let variableLet = " hola soy una variable Let"
for(var i = 0; i < 3; i++) {
   let variableLet ="Soy la segunda variable let "
}
console.log(variableLet)

/////////////////////////////////////////
let num = 4;

console.log(typeof num);

num ="Hola soy num";
console.log(typeof num);

