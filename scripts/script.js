// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwInput = document.querySelector("#password-input");
const passwconfirmInput = document.querySelector("#password-confirm-input");
const resetBtn = document.querySelector("#reset-btn");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwInput.onkeyup = () => {
  passwInput.classList.remove("is-valid");
  passwInput.classList.remove("is-invalid");
};

passwconfirmInput.onkeyup = () => {
  passwconfirmInput.classList.remove("is-valid");
  passwconfirmInput.classList.remove("is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  islastNameOk = false;
  isEmailOk = false;
  isPasswOk = false;
  isPasswconfirmOk = false;

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    islastNameOk = true;
  }

  // validate email
  if (validateEmail(emailInput.value) == false) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if (passwInput.value.length < 6) {
    passwInput.classList.add("is-invalid");
  } else {
    passwInput.classList.add("is-valid");
    isPasswOk = true;
  }

  // validate confirm password
  if (
    passwInput.value !== passwconfirmInput.value ||
    passwconfirmInput.value.length < 6
  ) {
    passwconfirmInput.classList.add("is-invalid");
  } else {
    passwconfirmInput.classList.add("is-valid");
    isPasswconfirmOk = true;
  }

  if (
    isFirstNameOk &&
    islastNameOk &&
    isEmailOk &&
    isPasswOk &&
    isPasswconfirmOk
  )
    alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.value = "";
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");

  lastNameInput.value = "";
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");

  emailInput.value = "";
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");

  passwInput.value = "";
  passwInput.classList.remove("is-valid");
  passwInput.classList.remove("is-invalid");

  passwconfirmInput.value = "";
  passwconfirmInput.classList.remove("is-valid");
  passwconfirmInput.classList.remove("is-invalid");
};
