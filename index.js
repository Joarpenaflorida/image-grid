const toggler = document.querySelector(".js-toggler");
const body = document.querySelector("body");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
let isActive = false;
const backToTop = document.querySelector(".js-top");
const container = document.querySelector(".container");
const loading = document.querySelector(".loader-background");

const timeOut = setTimeout(appear, 2000);

function visible() {
  container.classList.add("animate");
  container.style.display = "block";
}

function appear() {
  visible();
  loading.style.display = "none";
}

toggler.addEventListener("click", () => {
  if (isActive === true) {
    body.classList.toggle("dark");
    light.style.display = "none";
    dark.style.display = "block";
    isActive = false;
  } else {
    body.classList.toggle("dark");
    light.style.display = "block";
    dark.style.display = "none";
    isActive = true;
  }
});

window.addEventListener("scroll", (e) => {
  let windowHeight = window.scrollY;

  if (windowHeight >= 1000) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});
