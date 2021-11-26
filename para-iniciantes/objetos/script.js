//EXERCÍCIO
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const matheus = {
  name: "Matheus",
  lastName: "Ribeiro",
  age: 21,
  weigth: 72.3,

  completedName() {
    return `${this.name} ${this.lastName}`;
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(matheus.completedName());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const dog = {
  type: "Labrador",
  color: "Preto",
  age: 10,

  bark() {
    return "Latindo";
  },
};
