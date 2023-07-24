// Una cadena de texto con tu Nombre
const nombre = "Nombre";

// Otra cadena de texto con tu Apellido
const apellido = "Apellido";

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estudiante = nombre + " " + apellido;

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudianteMayus = estudiante.toUpperCase();

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const estudianteMinus = estudiante.toLowerCase();

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const longitudEstudiante = estudiante.length;

// Una variable que contenga la primera letra del Nombre
const primeraLetraNombre = nombre.charAt(0);

// Otra variable que contenga la última letra del Apellido
const ultimaLetraApellido = apellido.charAt(apellido.length - 1);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
const estudianteSinEspacios = estudiante.replace(/\s/g, "");

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const nombreContenidoEnEstudiante = estudiante.includes(nombre);

// Imprimir los resultados en la consola para verificar
console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Estudiante:", estudiante);
console.log("Estudiante en mayúsculas:", estudianteMayus);
console.log("Estudiante en minúsculas:", estudianteMinus);
console.log("Longitud del estudiante:", longitudEstudiante);
console.log("Primera letra del nombre:", primeraLetraNombre);
console.log("Última letra del apellido:", ultimaLetraApellido);
console.log("Estudiante sin espacios:", estudianteSinEspacios);
console.log("¿Nombre contenido en el estudiante?", nombreContenidoEnEstudiante);