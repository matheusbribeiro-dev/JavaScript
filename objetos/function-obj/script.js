// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const ps = document.querySelectorAll("p");

function caracterCount(old, item) {
  return old + item.innerText.length;
}

const caracterTotal = Array.prototype.reduce.call(ps, caracterCount, 0);
console.log(caracterTotal);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function NewHtmlElement(tag, classInTag, content) {
  const element = document.createElement(tag);
  element.classList.add(classInTag);
  element.insertAdjacentHTML("beforeend", content);

  return element;
}

const div = new NewHtmlElement("div", "active", "teste");

console.log(div);

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Creator = NewHtmlElement.bind(document, "h1", "titulo");

console.log(h1Creator("Sim"));
