export default function initDropDownMenu() {}

const dropDownMenus = document.querySelectorAll("[data-dropdown]");

function handleClick(event) {
  event.preventDefault();

  this.classList.toggle("active");
  outsideClick(this);
}

function handleOutside(element, event) {
  if (element.contains(event.target)) {
    return;
  }

  element.classList.remove("active");
  html.removeEventListener("click", (event) => handleOutside(element, event));
  return;
}

function outsideClick(element) {
  const html = document.documentElement;

  html.addEventListener("click", (event) => handleOutside(element, event));
}

dropDownMenus.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});
