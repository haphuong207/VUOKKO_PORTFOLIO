var ENGLISH = document.querySelector(".in-english");

var FINNISH = document.querySelector(".in-finnish");
var inEnglish = document.querySelector(".main");
var inFinnish = document.querySelector(".main_finnish");
console.log(inEnglish);

FINNISH.onclick = function () {
  inEnglish.classList.add("close");
  inFinnish.classList.add("active");
};

ENGLISH.onclick = function () {
  inFinnish.classList.remove("active");
  inEnglish.classList.remove("close");
};
