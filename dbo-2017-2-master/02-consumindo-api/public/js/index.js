const form = document.querySelector('form');
const divResultado = document.querySelector('div#resultado');
const scriptTemplate = document.querySelector('#template');

form.addEventListener('submit', function(e) {
  busca(form.cep.value);
  e.preventDefault();
});

function ajax(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = callback;
  xhr.send();
}

function busca(cep) { // cep: 96201460
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  ajax(url, function(e) {
    printa(JSON.parse(e.target.response));
  });
}

function printa(json) {
  const template = scriptTemplate.innerText;
  const handlebars = Handlebars.compile(template);
  const html = handlebars(json);
  divResultado.innerHTML = html;
}
function limpa(){
  if(document.getElementById('resultado').value!="") {
  document.getElementById('campo').value="";
  }
}





