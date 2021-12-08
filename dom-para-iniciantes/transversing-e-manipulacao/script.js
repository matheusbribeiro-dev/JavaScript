// Duplique o menu e adicione ele em copy
const copy = document.querySelector(".copy");

const menu = document.querySelector(".menu");
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const firtsDt = document.querySelector(".faq-lista dt");

console.log(firtsDt);

// Selecione o DD referente ao primeiro DT
const ddOfFirtsDt = firtsDt.nextElementSibling;

console.log(ddOfFirtsDt);

// Substitua o conteúdo html de .faq pelo de .animais
const animals = document.querySelector(".animais");
const faq = document.querySelector(".faq");

faq.innerHTML = animals.innerHTML;
