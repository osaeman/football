const hamburger_button = document.querySelector(
  ".mobile-header-hamburger-button"
);
const close_mob_menu_btn = document.querySelector(".close-mob-menu-btn");
const hamburger_menu = document.querySelector(".mobile-header-hamburger-menu");

hamburger_button.addEventListener("click", () => {
  hamburger_menu.classList.toggle("mobile-header-hamburger-menu-2");
});

close_mob_menu_btn.addEventListener("click", () => {
  hamburger_menu.classList.remove("mobile-header-hamburger-menu-2");
});
// Dropdown Nav Sub Menu For Mob Header
const mob_nav_sub_menu_link = document.querySelectorAll(
  ".mob-nav-sub-menu-link"
);
const mob_nav_sub_menu_dropdown = document.querySelectorAll(
  ".mob-nav-sub-menu-dropdown"
);
mob_nav_sub_menu_link.forEach((item, index) => {
  item.addEventListener("click", () => {
    mob_nav_sub_menu_dropdown[index].classList.toggle(
      "mob-nav-sub-menu-dropdown-display"
    );
    if (
      mob_nav_sub_menu_dropdown[index].classList.contains(
        "mob-nav-sub-menu-dropdown-display"
      )
    ) {
      mob_nav_sub_menu_link[
        index
      ].children[0].innerHTML = `<i class="fas fa-caret-up"></i>`;
    } else {
      mob_nav_sub_menu_link[
        index
      ].children[0].innerHTML = `<i class="fas fa-caret-down"></i>`;
    }
  });
});
// Dropdown Nav Sub Sub Menu For Mob Header
const mob_nav_sub_sub_menu_link = document.querySelectorAll(
  ".mob-nav-sub-sub-menu-link"
);
const mob_nav_sub_sub_menu_dropdown = document.querySelectorAll(
  ".mob-nav-sub-sub-menu-dropdown"
);
mob_nav_sub_sub_menu_link.forEach((item, index) => {
  item.addEventListener("click", () => {
    mob_nav_sub_sub_menu_dropdown[index].classList.toggle(
      "mob-nav-sub-sub-menu-dropdown-display"
    );
    if (
      mob_nav_sub_sub_menu_dropdown[index].classList.contains(
        "mob-nav-sub-sub-menu-dropdown-display"
      )
    ) {
      mob_nav_sub_sub_menu_link[
        index
      ].children[0].innerHTML = `<i class="fas fa-caret-up"></i>`;
    } else {
      mob_nav_sub_sub_menu_link[
        index
      ].children[0].innerHTML = `<i class="fas fa-caret-down"></i>`;
    }
  });
});

// Dropdown Nav Sub Menu For Web Header
const navSubMenuLink = document.querySelectorAll(".nav-sub-menu-link");
const navSubMenuDropdown = document.querySelectorAll(".nav-sub-menu-dropdown");

navSubMenuLink.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    if (index === 0) {
      navSubMenuDropdown[index].classList.add("nav-sub-menu-dropdown-show");
    } else {
      navSubMenuDropdown[index].classList.add(
        "nav-sub-menu-dropdown-show-style-2"
      );
    }
  });

  item.addEventListener("mouseout", () => {
    if (index === 0) {
      navSubMenuDropdown[index].classList.remove("nav-sub-menu-dropdown-show");
    } else {
      navSubMenuDropdown[index].classList.remove(
        "nav-sub-menu-dropdown-show-style-2"
      );
    }
  });
});
