//EXERCÍCIO
// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector("img");

console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens
window.onload = function () {
  //É preciso colocar no onload para pagarmos as imagens depois de carregadas no DOM
  let totalWidth = 0;
  const imgs = document.querySelectorAll("img");

  imgs.forEach((element) => {
    let width = element.getBoundingClientRect().width;

    console.log(element, width, totalWidth);

    totalWidth += width;
  });

  console.log(totalWidth);
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const aS = document.querySelectorAll("a");

aS.forEach((element) => {
  let measures = element.getBoundingClientRect();
  let recommendedWidth = measures.width >= 48;
  let recommendedHeight = measures.height >= 48;

  if (!recommendedWidth || !recommendedHeight) {
    return;
  }

  console.log(
    element,
    `Possui altura ${measures.height} e largura ${measures.width}`
  );
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const mobile = window.matchMedia("(max-width: 720px)");

if (mobile.matches) {
  document.querySelector(".menu").classList.add("menu-mobile");
}
