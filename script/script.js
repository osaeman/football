const hamburger_button = document.querySelector(
  ".mobile-header-hamburger-button"
);
const hamburger_menu = document.querySelector(".mobile-header-hamburger-menu");

hamburger_button.addEventListener("click", () => {
  hamburger_menu.classList.toggle("mobile-header-hamburger-menu-2");
});

// Dropdown Nav Sub Menu
const navSubMenuLink = document.querySelectorAll(".nav-sub-menu-link");
const navSubMenuDropdown = document.querySelectorAll(".nav-sub-menu-dropdown");

navSubMenuLink.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    navSubMenuDropdown[index].classList.add("nav-sub-menu-dropdown-show");
  });

  item.addEventListener("mouseout", () => {
    navSubMenuDropdown[index].classList.remove("nav-sub-menu-dropdown-show");
  });
});
