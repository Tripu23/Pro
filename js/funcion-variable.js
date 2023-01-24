//Definimos la funcion hola mundo
function holaMundo(){
    console.log("Hola mundo");
}

//desp debo invocarla. En este caso no tiene variable
//esta bueno para acortar codigo

holaMundo();

//una forma:
function sumar(a,b) {
    var resultado= a+b;

    return resultado;
}


//la llamo
suma = sumar(3,4);
console.log(suma);

suma2= sumar(5,6);
console.log(suma2);

//otra forma:
function sumarr(a,b){
    return a+b
}

suma3=sumarr(3,4);
console.log(suma3);
//q me haga directo la suma, no poner el rdo en una variable

/**Introduccion a JS */

//sintaxis

//p/ definir variables↓ 
var miVariable; 
let nombre;
//las variables pueden/tienen q estar cambiando a lo largo de la ejecucion del programa
//los nombres de las variables tienen q ser identificadores unicos, darme algun contexto
//nombres de las variables: x y X son distintas variables. Pueden empezar con letra o $ y contener -

//constante: no varia su valor durante toda la ejecucion del programa
const IVA = 21; //es una "variable" que no cambia

//JS es capa de interaccion

//en developermozilla ver listado de eventos js