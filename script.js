const toggle = document.querySelector("#toggle");
const toggleClose = document.querySelector("#toggleClose");
const nav = document.querySelector("#navItem");
const link = document.querySelectorAll("a[href]");

toggle.addEventListener("click", function () {
  // nav.classList.add("duration-500");
  nav.classList.remove("w-[0%]");
  nav.classList.add("w-[60%]");
});
toggleClose.addEventListener("click", function () {
  nav.classList.remove("w-[60%]");
  nav.classList.add("w-[0%]");
});
link.forEach((x) =>
  x.addEventListener("click", function () {
    nav.classList.remove("w-[60%]");
    nav.classList.add("w-[0%]");
    // nav.style.width="0px"
  })
);
// window.addEventListener("load", function () {
//   nav.classList.remove("w-[60%]");
//   nav.classList.add("w-[0%]");
// });
