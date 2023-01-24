var nombre = "Giuliana";

nombre = 33;

console.log ("nombre vale:" +nombre);

/**modulo 10 video 1. ej de w3schools */
let longitud = 16;            // Number

let apellido = "Johnson";   // String

const y = {nombre: "John", apellido: "Doe"}; // Object
//en vez de const puede ir x//

//no tiene sentido sumar dos variables de distinto tipo de dato
//ej no tiene sentido sumar un numero y un string
let z= 16 + "volvo"; // lo q hace java es tomar todo como string y escribe 16volvo

//tipos de variables

let x;  //definimos la variable x
console.log(x);
x = 5;  // le asigno un valor numerico a x
console.log(x);
x = "John";  //x ahora almacena un string
console.log(x);

//dar contexto con el nombre de variable al tipo de dato q almacena
let numero; //aca defino un num//

//yo voy guardando todo en un mismo archivo el loco cada cosa q hace lo pone en distintos 
// creo q es lo mismo

//if


/* if (condition) {    
accion} else {
    console.log(blabla)
}
*/
var edad=18;

if (edad>=18) {
    console.log("la persona es mayor")
} else{
    console.log("la persona es menor")    
}

//en vez de poner >= 18 podes poner >17 y nos da lo mismo

//iteradores: for - while ver las imagenes
//for (inicializacion; condicion; incremento/decremento/accion)
var w=0;
for (w; w<5; w++) {
    console.log("El valor de w es: "+w); //sentencia q se repite mientras w cumpla con la condicion
}

var w=10;
for (w; w>5; w--) {
    console.log("El valor de w es: "+w); //sentencia q se repite mientras w cumpla con la condicion
}

//no existe unica forma de hacer una iteracion

//iterador while
var x=10;

while (x>0) {
    console.log("mi variable vale: " +x); //ingresa y ejecuta
    x--; //acciona
}

//for para cuando sabemos la cantidad de iteraciones q hace el ciclo. 
//while cuando no sabemos cuantas iteraciones va a haber en el ciclo. x ej cuando traigo una tabla con resumen de datos (?)

//iterador do-while

var x=10;
do{
    console.log("mi variable vale:" +x)      //primero ejecuto una vez la sentencia y desp pregunto si sigo ejecutando o no  
    } while (x>10);

//ejecuta una vez y desp pregunta ↑ 

//sentencia break: para que corte el ciclo en cierto valor de mi variable

var w=10;
for (w; w>0; w--) {

    if (w==5) {
        break;
    }
    console.log("El valor de w es: "+w); //sentencia q se repite mientras w cumpla con la condicion
}

//sentencia continue es opuesta a break
