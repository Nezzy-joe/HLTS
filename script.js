//chike begins//
const chike = document.getElementById("chike");

const registerBtn = document.getElementById("register");

const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  chike.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  chike.classList.remove("active");
});
//Chike end//
/*
function setupFormFunctionality() {
  const loginButton = document.getElementById("login");
  const registerButton = document.getElementById("register");
  const toggleContainer = document.querySelector(".toggle-container");

  // Event listener for the login button
  loginButton.addEventListener("click", function () {
    toggleContainer.classList.remove("register-mode");
  });

  // Event listener for the register button
  registerButton.addEventListener("click", function () {
    toggleContainer.classList.add("register-mode");
  });
}

// Call the function to set up the form functionality once the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  setupFormFunctionality();
});*/
