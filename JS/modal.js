const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector(".button-close");
const modal = document.querySelector("#modal");
const body = document.body;

openModalBtn.addEventListener("click", () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
  body.style.overflow = "";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("is-open");
    body.style.overflow = "";
  }
});