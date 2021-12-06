// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]');

function addActiveClass(event) {
  event.preventDefault();

  event.target.classList.add("ativo");
}

links.forEach((item, index, array) => {
  item.addEventListener("click", function (event) {
    array.forEach((element) => {
      if (element.classList.contains("ativo")) {
        element.classList.remove("ativo");
      }
    });

    addActiveClass(event);
  });
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const allElements = document.querySelectorAll("body *");

function showThisElement(event) {
  //event.currentTarget.remove();
}

allElements.forEach((element) => {
  element.addEventListener("click", showThisElement);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
const html = document.documentElement;

function moreSizeForFont(event) {
  switch (event.key) {
    case "t":
      html.classList.toggle("moreSizeFont");
      break;
    default:
      console.log('Is not "t"');
      break;
  }
}

window.addEventListener("keydown", moreSizeForFont);
