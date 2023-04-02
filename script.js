const container = document.querySelector(".container");
const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
openBtn.addEventListener("click", function () {
  console.log("open is clicked");
  container.classList.add("show-nav");
});
closeBtn.addEventListener("click", function () {
  container.classList.remove("show-nav");
});
