document.documentElement.classList.add("js");

const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
tabContent[0].classList.add("active");

function activeTab(index) {
  tabContent.forEach((element) => {
    let isActive = element.classList.contains("active");

    if (isActive) {
      element.classList.remove("active");
    }
  });

  tabContent[index].classList.add("active");
}

tabMenu.forEach((item, index) => {
  item.addEventListener("click", () => activeTab(index));
});
