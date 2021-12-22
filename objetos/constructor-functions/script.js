// Transforme o objeto abaixo em uma Constructor Function
/*const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};*/

function People(name, age) {
  this.name = name;
  this.age = age;

  this.toWalk = function () {
    console.log(`${this.name} andou`);
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new People("João", 20);
const maria = new People("Maria", 25);
const bruno = new People("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
  this.elements = function () {
    return document.querySelectorAll(selector);
  };

  this.addClass = function (className) {
    this.elements().forEach((element) => {
      element.classList.add(className);
    });
  };

  this.removeClass = function (className) {
    this.elements().forEach((element) => {
      element.classList.remove(className);
    });
  };
}

const li = new Dom("ul li");
