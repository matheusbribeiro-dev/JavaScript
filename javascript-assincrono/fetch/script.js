// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const form = document.forms.searchCep;
const ul = document.querySelector("#end");

function searchCep(event) {
  event.preventDefault();

  const cep = this.cep.value;

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((json) => {
      ul.innerHTML = `
      <li>${json.bairro}</li>
      <li>${json.logradouro}</li>
      <li>${json.localidade}</li>
      `;
    });
}

form.addEventListener("submit", searchCep);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
