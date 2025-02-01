const x = document.getElementsByClassName(".mb-menu-toggle");
function toggleFunction() {
  x.classList.toggle("hide-me");
}
x.addEventListener("click", toggleFunction);
