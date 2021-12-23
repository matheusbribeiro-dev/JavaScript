//EXERCÍCIOS
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function People(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}

People.prototype.completeName = function () {
  return `${this.name} ${this.lastname}`;
};

const i = new People("Matheus", "Ribeiro", 21);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
console.log("NodeList", Object.getOwnPropertyNames(NodeList));
console.log("HTMLCollection", Object.getOwnPropertyNames(HTMLCollection));
console.log("Document", Object.getOwnPropertyNames(Document));

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

console.log("Li", li.constructor.name);
console.log("li.click", li.click.constructor.name);
console.log("li.innerText", li.innerText.constructor.name);
console.log("li.value", li.value.constructor.name);
console.log("Li.hidden", li.hidden.constructor.name);
console.log("Li.offsetLeft", li.offsetLeft.constructor.name);
//console.log("Li.click()", li.click().constructor.name);
