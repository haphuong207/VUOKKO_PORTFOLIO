var RegisterForm = document.querySelector(".modal__register-form");

var RegisterModal = document.querySelector(".modal");

var RegisterFormClose = document.querySelector(".modal-container__register");

RegisterForm.onclick = function () {
  RegisterModal.classList.add("open");
};
RegisterModal.onclick = function () {
  RegisterModal.classList.remove("open");
};
RegisterFormClose.onclick = function (event) {
  event.stopPropagation();
};

var LoginForm = document.querySelector(".modal__login-form");
console.log(LoginForm);

var LoginModal2 = document.querySelector(".modal-2");
console.log(LoginModal2);

var LoginFormClose = document.querySelector(".modal-container__login");
console.log(LoginFormClose);

LoginForm.onclick = function () {
  LoginModal2.classList.add("letitwork");
};

LoginModal2.onclick = function () {
  LoginModal2.classList.remove("letitwork");
};
LoginFormClose.onclick = function (event) {
  event.stopPropagation();
};
var ChangeBox = document.querySelector(".change-to-login");
ChangeBox.onclick = function () {
  RegisterModal.classList.remove("open");
  LoginModal2.classList.add("letitwork");
};
var ChangeBoxBack = document.querySelector(".change-to-register");
ChangeBoxBack.onclick = function () {
  RegisterModal.classList.add("open");
  LoginModal2.classList.remove("letitwork");
};
