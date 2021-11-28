//SELETOR GERAL ÚNICO
//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector("li");

//SELETOR GERAL LISTA
//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection = document.querySelectorAll(".grid-section");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animais-lista img");

// Retorna o segundo elemento
console.log(gridSection[1]);
//Diferente do getElementsByClassName, a lista aqui é estática

//HTMLCOLLECTION VS NODELIST
//A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

titulo.classList.add("grid-section");

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

//ARRAY-LIKE
//HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

const gridSection = document.querySelectorAll(".grid-section");

gridSection.forEach(function (gridItem, index, array) {
  gridItem.classList.add("azul");
  console.log(index); // index do item na array
  console.log(array); // a array completa
});

//É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)
