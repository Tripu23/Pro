document.getElementById("sumar").addEventListener('click',function(){
    let numeroA = document.getElementById("numero1").value;
    console.log("El valor del numero a es: "+numeroA);

    let numeroB = document.getElementById("numero2").value;
    console.log("El valor del numero B es: "+numeroB);

    let resultado = sumar(numeroA, numeroB);
    console.log("El valor de la suma es: "+resultado);

    document.getElementById("resultado").innerHTML = resultado;
});

function sumar(a,b){
    return a+b
}