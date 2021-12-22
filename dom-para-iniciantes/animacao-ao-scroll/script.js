document.documentElement.classList.add("js");

function initTabNav() {
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
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    function activeAccordion(event) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }

    accordionList.forEach((item, index) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScroll() {
  const links = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    //Forma 1
    /*section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    });*/

    //Forma 2
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }

  links.forEach((item, index) => {
    item.addEventListener("click", scrollToSection);
  });
}
initScroll();

function initScrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const halfTheWindow = window.innerHeight * 0.6;

    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTopDistance =
          section.getBoundingClientRect().top - halfTheWindow;

        if (sectionTopDistance < 0) {
          section.classList.add("active");
        }
      });
    }

    scrollAnimation();

    window.addEventListener("scroll", scrollAnimation);
  }
}
initScrollAnimation();
