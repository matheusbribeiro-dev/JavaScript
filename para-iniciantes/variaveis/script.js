var name = "Matheus";
let age = 21;
//Ou
var name1 = "Matheus",
  age2 = 21;

/*As variáveis são responsáveis por guardar dados na memória
como declarar uma variável ? var(não se usa mais), let

No caso do 'const' seria a declaração de uma constante*/

console.log(name, age, "/", name1, age2);

//Sem valor
var varUndefined; //Terá retorno = 'Undefined'

/*
Os nomes podem iniciar com $, _, ou letras.

Podem conter números mas não iniciar com eles

Case sensitive

nome é diferente de Nome

Não utilizar palavras reservadas

https://www.w3schools.com/js/js_reserved.asp

Camel case

É comum nomearmos assim: abrirModal

- Inválido
var §nome;
var function;
var 1possuiFaculdade;

- Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;
*/

//HOISTING
//São movidas para cima do código, porém o valor atribuído não é movido.

console.log(nome); //Retorna undefined

var nome = "André"; /*só será atribuído valor nesta linha,
mesmo que o JS tenha movido a declaração lá pra cima*/

var profissao = "Designer";
console.log(profissao);
// Retornar Designer
