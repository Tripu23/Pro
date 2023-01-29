const datos = '{"results": {"gender": "female", "name":{"title": "Miss", "first": "Jennie", "last": "Nichols"}, "location": {"street": {"number": 8929, "name": "Valwood Pkwy"}, "city": "Billings", "state": "Michigan", "country": "United States", "postcode": "63104", "coordinates": {"latitude": "-69.8246", "longitude": "134.8719" }, "timezone": {"offset": "+9:30","description": "Adelaide, Darwin"}},"email": "jennie.nichols@example.com","dob":{"date": "1992-03-08","age": 30},"phone": "(272) 790-0888","cell": "(489) 330-2385","picture": {"large": "https://randomuser.me/api/portraits/women/68.jpg","medium": "https://randomuser.me/api/portraits/med/women/68.jpg","thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg"},"nat": "US" }}'
console.log(datos)
const obj=JSON.parse(datos);
console.log(obj);

const perfil_prof = "Licenciado en Diseño Gráfico por la Universidad de Westminster " +"(" +obj.results.location.state +")"+ " buscando encontrar una oportunidad laboral para poner en práctica todos los conocimientos aprendidos. Con disponibilidad inmediata y movilidad dentro del territorio nacional";

//const exp_lab = {};
//const experiencia=JSON.parse(exp_lab)

//const habil = {};
//const habilidades = JSON.parse(habil);

//const form_ac = {};
//const formacion = JSON.parse(form_ac);


document.getElementById('sobre-mi').innerHTML='a ver'

document.getElementById("name").innerHTML= obj.results.name.first+ " " +obj.results.name.last
document.getElementsById("prof").innerText="Licenciada"
document.getElementById('edad').innerHTML="Edad: " +obj.results.dob.age+ " años"

document.getElementById('dob').innerHTML= "Fecha de nac: "+obj.results.dob.date

document.getElementById('ciudad').innerHTML = obj.results.location.city +", "+obj.results.location.state+", " +obj.results.location.country+ ". "

document.getElementById("perfil_prof").innerText= perfil_prof

