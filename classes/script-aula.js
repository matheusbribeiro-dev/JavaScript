//CONSTRUCTOR FUNCTION
/*Funções responsáveis pela criação de objetos. O conceito de uma função construtora de objetos é implementado em outras
linguagens como Classes.*/

function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
};

const blueButton = new Button("Comprar", "blue");

//CLASS
/*O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos utilizar a palavra chave class.
É considerada syntactical sugar, pois por baixo dos panos continua utilizado o sistema de protótipos de uma função
construtora para criar a classe.*/

class Button1 {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
}

const blueButton1 = new Button1("Comprar", "blue");

//CLASS VS CONSTRUCTOR FUNCTION
class Button2 {
  constructor(propriedade) {
    this.propriedade = propriedade;
  }
  metodo1() {}
  metodo2() {}
}

function Button3(propriedade) {
  this.propriedade = propriedade;
}
Button3.prototype.metodo1 = function () {};
Button3.prototype.metodo1 = function () {};

//CONSTRUCTOR
/*O método constructor(args) {} é um método especial de uma classe. Nele você irá definir todas as propriedades do
objeto que será criado. Os argumentos passados em new, vão direto para o constructor.*/

class Button4 {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
}

const blueButton4 = new Button4("Clique", "blue", "white");
// Button {text: 'Clique', background: 'blue', color: 'white'}

//CONSTRUCTOR RETURN
/*Por padrão a classe retorna this. Ou seja, this é o objeto criado com o new Class. Podemos modificar isso alterando
o return do constructor, o problema é que perderá toda a referência do objeto.*/

class Button5 {
  constructor(text) {
    this.text = text;
    return this.element(); // não fazer
  }
  element() {
    document.createElement("button").innerText = this.text;
  }
}

const btn = new Button("Clique");
// <button>Clique</button>

//THIS
/*Assim como em uma função construtora, this faz referência ao objeto criado com new. Você pode acessar as propriedades
e métodos da classe utilizando o this.*/

class Button6 {
  constructor(text) {
    this.text = text;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    return buttonElement;
  }
  appendElementTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
  }
}

const blueButton6 = new Button6("Clique");
blueButton6.appendElementTo("body");

//STATIC VS PROTOTYPE
/*Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos
diretamente na classe utilizando a palavra chave static. Assim como [].map() é um método de uma array e Array.from()
é um método do construtor Array.*/

class Button7 {
  constructor(text) {
    this.text = text;
  }
  static create(background) {
    const elementButton = document.createElement("button");
    elementButton.style.background = background;
    elementButton.innerText = "Clique";
    return elementButton;
  }
}

const blueButton7 = Button7.create("blue");
