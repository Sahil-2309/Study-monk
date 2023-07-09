var registerButton = document.getElementById("register-button");
registerButton.addEventListener("click", function () {
  var registerForm = document.getElementById("register-form");
  registerForm.submit();
  registerForm.reset();
  alert("You have successfully registered!");
});
