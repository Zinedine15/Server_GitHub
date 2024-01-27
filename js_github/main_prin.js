//alert("hola mundo");

let ip=document.getElementById('ip');
let pais=document.getElementById('pais');
let continente=document.getElementById('continente');

const solicitudAPI = () => {
//hacer una peticion para un usuario con ID especifico

axios
.get('https://itp-zah-bdd.000webhostapp.com/php-geoip-api/index.php')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
    ip.innerHTML = response.data.ip;
    pais.innerHTML = response.data.pais;
    continente.innerHTML = response.data.continente;

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
}
//Llama al evento LOAD acada vez que se refresca o actualiza la página
//y llama a la función solicitud API que tiene la rutina
//de llamar a la API desde axios
window.addEventListener("load", solicitudAPI);

document.getElementById('redireccionarBtn').addEventListener('click', function () {
  var pais = document.getElementById('pais').innerText.toLowerCase();
  switch (pais) {
      case 'france':
          window.location.href = 'https://itp-zah-bdd.000webhostapp.com/pag_fran/index_fran.html';
          break;
      case 'algeria':
          window.location.href = 'https://itp-zah-bdd-2.000webhostapp.com/pag_argel/index_argel.html';
          break;
      case 'argentina':
          window.location.href = 'https://itp-zah-bdd-3.000webhostapp.com/pag_argen/index_argen.html';
          break;
      // Puedes agregar más casos según sea necesario
      default:
          alert('No hay una página específica para este país.');
  }
});