/*7 TIPOS DE DADOS
Todos são primitivos exceto os objetos.*/

var nome = "André"; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

// Os primitivos são dados imutáveis

//Verificando o tipo do dado
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof possuiFaculdade);
console.log(typeof time);
console.log(typeof comida);
console.log(typeof simbolo);
console.log(typeof novoObjeto);
console.log(typeof null); //object

//STRING
//Você pode somar uma string e assim concatenar as palavras.

var nome = "Matheus";
var sobrenome = "Ribeiro";
var nomeCompleto = nome + " " + sobrenome;

//ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
('JavaScript é "super" fácil');
("JavaScript é 'super' fácil");
('JavaScript é "super" fácil');
`JavaScript é "super" fácil"`;
//"JavaScript é "super" fácil"; // Inválido
//Não necessariamente precisamos atribuir valores a uma variável

// TEMPLATE STRING
var gols = 1000;
var frase1 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
// COPIAR
// Você deve passar expressões / variáveis dentro de ${}
