// Seleciona os elementos do botão e do menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Alterna a visibilidade do menu ao clicar no botão "hambúrguer"
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Fecha o menu ao clicar em qualquer link dentro dele
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
