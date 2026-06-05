const openBtn = document.querySelector("[data-menu-open]");
const closeBtn = document.querySelector("[data-menu-close]");
const menu = document.querySelector("#mobile-menu");

openBtn.addEventListener("click", () => {
  menu.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("is-open");
});