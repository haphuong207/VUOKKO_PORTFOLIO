/*language */
var inENG = document.querySelector(".inEng");
var inFIN = document.querySelector(".inFin");
var ENG = document.querySelector(".inENGLISH");
var FINN = document.querySelector(".inFINNISH");

inFIN.onclick = function () {
  ENG.classList.add("close");
  FINN.classList.add("active");
};
inENG.onclick = function () {
  FINN.classList.remove("active");
  ENG.classList.remove("close");
  ENG.classList.add("active");
};

var toggleBar = document.querySelector(".navbar__search");
var navigationBar = document.querySelector(".navigation");
var navbar = document.querySelector(".navbar");
var main = document.querySelector(".main");

toggleBar.onclick = function () {
  navigationBar.classList.toggle("active");
  navbar.classList.toggle("active");
  main.classList.toggle("active");
};

/*slide */
var imageMain = document.querySelector(" .me__img img");
var picSubs = document.querySelectorAll(" .img-sub1 a img");

picSubs.forEach((picSub) => {
  let thayDoi = picSub.getAttribute("src");
  picSub.onclick = (event) => {
    imageMain.src = thayDoi;
    event.preventDefault();
  };
});
