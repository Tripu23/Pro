const datos = '{"results": {"gender": "male", "name":{"title": "Mister", "first": "Brandon", "last": "Nichols"}, "location": {"street": {"number": 8929, "name": "Valwood Pkwy"}, "city": "Billings", "state": "Michigan", "country": "United States", "postcode": "63104", "coordinates": {"latitude": "-69.8246", "longitude": "134.8719" }, "timezone": {"offset": "+9:30","description": "Adelaide, Darwin"}},"email": "brandon.nichols@example.com","dob":{"date": "1992-03-08","age": 30},"phone": "(272) 790-0888","cell": "(489) 330-2385","picture": {"large": "https://randomuser.me/api/portraits/men/42.jpg","medium": "https://randomuser.me/api/portraits/men/med/42.jpg","thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"},"nat": "US" }}'
console.log(datos)
const obj=JSON.parse(datos);
console.log(obj);

const perfil_prof = "Licenciado en Diseño Gráfico por la Universidad de Westminster " +"(" +obj.results.location.state +")"+ " buscando encontrar una oportunidad laboral para poner en práctica todos los conocimientos aprendidos. Con disponibilidad inmediata y movilidad dentro del territorio nacional.";

const exp_lab = '{"Ilustrador":{"rol":"Ilustrador","dependencia":"autónomo","lugar":"Murcia", "fecha":"2017-actual","tareas":{"a":"Manejo del entorno Mac", "b":"Creación de ilustraciones digitales o en papel", "c":"Caracter paciente para atender al cliente y escuchar sus necesidades"}}, "Fotografo":{"rol":"Fotógrafo","dependencia":"autónomo", "lugar":"Murcia","fecha":"2016-actual","tareas":{"a":"Experiencia demostrable en fotografía de bodas y eventos","b":"Optimización de fotografías para versiones digitales (web y ERP)","c":"participación en la generación de ideas creativas para conseguir objetivos establecidos con el cliente"}}}'

const experiencia=JSON.parse(exp_lab);

console.log(experiencia);
//const habil = {};
//const habilidades = JSON.parse(habil);

//const form_ac = {};
//const formacion = JSON.parse(form_ac);


document.getElementById("name").innerHTML= obj.results.name.first+ " " +obj.results.name.last
document.getElementById('edad').innerHTML="Edad: " +obj.results.dob.age+ " años"

document.getElementById('dob').innerHTML= "Fecha de nacimiento: "+obj.results.dob.date

document.getElementById('ciudad').innerHTML = obj.results.location.city +", "+obj.results.location.state+", " +obj.results.location.country+ ". "

// document.getElementById("foto").innerHTML = '<img src= "obj.results.picture.large">'; //este no me funciona lo hice directo en el html

document.getElementById("perfil_prof").innerText= perfil_prof


//hay q cambiarle el nombre y hacer el evento ↓
//document.getElementById('experiencia').innerHTML=experiencia.Ilustrador.rol + ", " +experiencia.Fotografo.rol

//hacer eventos↓
//document.getElementById('sobre-mi').innerHTML='VIRTUDES'
const Expe = 'hola esta es mie xperiencia';
function displayExpe(){
    document.getElementById("experiencia1").innerHTML=Expe
}

//document.getElementById('formacion').innerHTML='Formacion'
//function displayFormacion() {
  //  document.getElementById("demo").innerHTML = formacionn
  //}



  function confirmInput() {
    alert("Gracias, te responderé a la brevedad!");
  }
//en caso de q haya algun tooltip me lo inicia:

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
