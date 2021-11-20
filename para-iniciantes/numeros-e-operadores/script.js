//EXERCÍCIO
// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; //35
console.log(total);

// Crie duas expressões que retornem NaN
let nan1 = "abc" - 1;
let nan2 = "21s" - 4;
console.log(nan1, nan2);

// Somar a string '200' com o número 50 e retornar 250
let number = "200";
console.log(+number + 50);

// Incremente o número 5 e retorne o seu valor incrementado
let number5 = 5;
console.log(++number5);

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
