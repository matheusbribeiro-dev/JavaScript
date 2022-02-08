// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = Array.from(document.querySelectorAll(".curso"));

const arrayOfObjets = cursos.map((item) => {
  return {
    title: item.querySelector("h1").innerText,
    description: item.querySelector("p").innerText,
    classes: item.querySelector(".aulas").innerText,
    time: item.querySelector(".horas").innerText,
  };
});

console.log(arrayOfObjets);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numbersGreater = numeros.filter((item) => item > 100);
console.log(numbersGreater);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
console.log(instrumentos.some((item) => item === "Baixo"));

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];
let totalValue = 0;

function numberFormat(string) {
  return parseFloat(string.replace("R$ ", "").replace(",", "."));
}

compras.forEach((item) => {
  totalValue += numberFormat(item.preco);
});

console.log(totalValue);
