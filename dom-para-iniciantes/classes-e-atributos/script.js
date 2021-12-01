// Adicione a classe ativo a todos os itens do menu
const menuLis = document.querySelectorAll(".menu ul li");

menuLis.forEach((li) => li.classList.add("ativo"));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuLis.forEach((li, index) => {
  if (index === 0) {
    return;
  }

  li.classList.remove("ativo");
});
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  console.log(`Possui alt: ${img.hasAttribute("alt")}`);
});

// Modifique o href do link externo no menu
const externalLink = document.querySelector('a[href^="https"]');
externalLink.setAttribute("href", "https://www.youtube.com");
