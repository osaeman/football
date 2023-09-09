const hamburger_button = document.querySelector(
  ".mobile-header-hamburger-button"
);
const hamburger_menu = document.querySelector(".mobile-header-hamburger-menu");

hamburger_button.addEventListener("click", () => {
  hamburger_menu.classList.toggle("mobile-header-hamburger-menu-2");
});
