// Retorne um número aleatório
// entre 1050 e 2000
let aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
console.log(Math.max(...numeros.split(", ")));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

/**
 * @param {Array} numbers
 */
function numberPrepare(numbers) {
  let numbersFloat = [];
  let total = 0;

  numbers.forEach((num) => {
    let numberFormated = num
      .trim()
      .replace(/[R r]/g, "")
      .replace("$", "")
      .replace(",", ".");

    numbersFloat.push(Math.round(numberFormated));
  });

  numbersFloat.forEach((num) => {
    total += num;
  });

  console.log("Números arredondados: ", numbersFloat, `Soma total: ${total}`);
}

numberPrepare(listaPrecos);
