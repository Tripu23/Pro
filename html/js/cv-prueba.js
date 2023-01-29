//toy probando para q me de los datos de la pag random
const requestURL = 'https://randomuser.me/api/'
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const DATOS = request.response;
    populateHeader(DATOS);
    showHeroes(DATOS);
  }