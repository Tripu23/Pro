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

