//EXERCÍCIO
// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  return !!value;
}

console.log(isTruthy(""));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimeter(side) {
  return side * 4;
}

console.log(perimeter(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function completedName(name, lastName) {
  return `${name} ${lastName}`;
}

console.log(completedName("Matheus", "Ribeiro"));

// Crie uma função que verifica se um número é par
function evenOrOdd(value) {
  let module = value % 2;

  if (module !== 0) {
    return "Ímpar";
  }

  return "Par";
}

console.log(`1: ${evenOrOdd(1)}`);
console.log(`2: ${evenOrOdd(2)}`);
console.log(`3: ${evenOrOdd(3)}`);
console.log(`4: ${evenOrOdd(4)}`);
console.log(`500: ${evenOrOdd(500)}`);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function whatsIsType(value) {
  return typeof value;
}

console.log(whatsIsType([]));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("Matheus Ribeiro");
});

var totalPaises = 193;

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
