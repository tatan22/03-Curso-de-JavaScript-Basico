//Comparaciones 

//Igualda 
let a = 5;
let b = 5;
let c = "5";
console.log (typeof(a), typeof(b), typeof(c));

if(5 == 5) { // Igualda devil compara el valor
   console.log("5 es igual a 5")
}
if(a == b) { // Igualda devil
   console.log("a es igual a b")
}
if(a == c) { // Igualda devil
   console.log("a es igual a b")
}


if(5 === 5) { // Igualda Fuerte compara el velor y el tipo 
   console.log("5 es muy igual a 5")
}
if(a === b) { // Igualda Fuerte
   console.log("a es igual a b")
}
if(a === c) { // Igualda Fuerte
   console.log("a es igual a b")
}

// Desigualdades 
let d = 10;
let e = 5;
let f = "5";

if(d != e){
   console.log("d es diferente a e");
}
if(d !== e){
   console.log("d es diferente a e");
}

if(e != f){
   console.log("d es diferente a e");
}
if(e !== f){
   console.log("d es diferente a e");
}

let max = 10;
let min = 5;

if(max > min){
   console.log("max mayor que min ");
}
if(max >= 10){
   console.log("max mayor que min ");
}

if(max < min){
   console.log("max mayor que min ");
}
if(max <= 10){
   console.log("max mayor que min ");
}

