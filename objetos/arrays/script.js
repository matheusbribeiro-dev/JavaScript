const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
const removeOfComidas = comidas.shift();
console.log(removeOfComidas);

// Remova o último valor de comidas e coloque em uma variável
const lastItemRemovedOfComidas = comidas.pop();
console.log(lastItemRemovedOfComidas);

// Adicione 'Arroz' ao final da array
comidas.push("Arroz");

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");

console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());

// Inverta a ordem dos estudantes
console.log(estudantes.reverse());

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana"));

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana"));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
console.log(html.split("section").join("ul").split("div").join("li"));

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const newCarros = carros.slice();

carros.pop();

console.log(carros, newCarros);
