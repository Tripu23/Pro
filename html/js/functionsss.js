/**document.getElementById("boton").onclick = function (){
    console.log("Capturamos el evento click")
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer evento en JS"
} 
*/

//variante del evento click (se puede aplicar en cualq evento)
//document.agregarevento(click,funcion a ejecutar,)

/** ↓este se hizo generico(se aplico a todo el documento)

document.addEventListener('click',function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer event.Listener"
});
 */

//ver en w3s todos los dom events

//aca lo hago para un elemento en particular: 
/**busca el elemento "boton" y agregale el evento tal */
document.getElementById('boton').addEventListener('click',function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML="Estamos probando el event.Listener en un elem partic"
});

document.getElementById('boton_color').addEventListener('click',function(){
    document.body.style.backgroundColor = 'green';
});

document.getElementById('boton_default').addEventListener('click',function(){
    document.body.style.backgroundColor = 'rgb(110, 199, 192)';
});

document.getElementById("boton_ocultar").addEventListener('click',function(){
    document.getElementById('demo').style.display='none'
});

//queremos q pase algo cuando el usuario ingrese↓
//a todos los elementos de la clase "parrafo" le aplica algo, puedo construir un iterador tmb

const collection = document.getElementsByClassName("parrafo");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "white";
}