//EXERCÍCIO
// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll("img");
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgsName = document.querySelectorAll('img[src^="img/imagem"]');

// Selecione todos os links internos (onde o href começa com #)
const initHref = document.querySelectorAll('[href^="#"]');
console.log(initHref);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector(".animais-descricao h2");
console.log(h2);

// Selecione o último p do site
const pSite = document.querySelectorAll("p");
const lastP = pSite[--pSite.length];

console.log(lastP);
