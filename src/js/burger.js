export function initBurger() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header__menu");
  const body = document.body;

  if (burger && menu) {
    burger.addEventListener("click", () => {
      const isOpen = burger.getAttribute("aria-expanded") === "true";

      burger.setAttribute("aria-expanded", !isOpen);

      menu.classList.toggle("header__menu--active");

      body.classList.toggle("disable-scroll");
    });

    const menuLinks = menu.querySelectorAll(".menu__link");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burger.setAttribute("aria-expanded", "false");
        menu.classList.remove("header__menu--active");
        body.classList.remove("disable-scroll");
      });
    });
  }
}
