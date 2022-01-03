// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxas = 0;
let recebimentos = 0;

transacoes.forEach((element) => {
  if (element.descricao.includes("Taxa")) {
    taxas += parseInt(element.valor.replace("R$ ", ""));
  }

  if (element.descricao.includes("Recebimento")) {
    recebimentos += parseInt(element.valor.replace("R$ ", ""));
  }
});

console.log(taxas); //297
console.log(recebimentos); //148

//Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

console.log(transportes.split(";"));

//Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
let newHtml = html.replace(/[span]+/g, "a");
console.log(newHtml);

//Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase.charAt(--frase.length));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let qtdTaxas = 0;

transacoes2.forEach((item) => {
  let text = item.trimStart().substring(0, 4).toLowerCase();

  if (text === "taxa") {
    qtdTaxas += 1;
  }
});

console.log(qtdTaxas);
