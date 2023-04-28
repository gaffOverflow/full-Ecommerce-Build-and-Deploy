const toggle = document.querySelector("#toggle");
const toggleClose = document.querySelector("#toggleClose");
const navItem = document.querySelector("#navItem");
const link = document.querySelectorAll("a[href]");
const nav = document.querySelector("nav");

toggle.addEventListener("click", function () {
  // navItem.classList.add("duration-500");
  navItem.classList.remove("w-[0%]");
  navItem.classList.add("w-[60%]");
});
toggleClose.addEventListener("click", function () {
  navItem.classList.remove("w-[60%]");
  navItem.classList.add("w-[0%]");
});
link.forEach((x) =>
  x.addEventListener("click", function () {
    navItem.classList.remove("w-[60%]");
    navItem.classList.add("w-[0%]");
    // navItem.style.width="0px"
  })
);
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 250) {
    nav.classList.remove("top-0");
    nav.classList.add("-top-20");
  } else {
    nav.classList.remove("-top-20");
    nav.classList.add("top-0");
  }
});
