import FormValidator from "./validator.js";

const form = document.forms[0];
const firstNameFormInput = document.getElementById("firstName");
const lastNameFormInput = document.getElementById("lastName");
const emailFormInput = document.getElementById("email");
const messageFormInput = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fd = new FormData(event.target);
  const data = Object.fromEntries(fd.entries());

  // First Name
  if (!FormValidator.stringIsNotEmpty(data.firstName)) {
    showValidationMessage(firstNameFormInput, "First name must not be empty");
  } else {
    clearValidationMessage(firstNameFormInput);
  }

  // Last Name
  if (!FormValidator.stringIsNotEmpty(data.lastName)) {
    showValidationMessage(lastNameFormInput, "Last name must not be empty");
  } else {
    clearValidationMessage(lastNameFormInput);
  }

  // Email
  if (!FormValidator.stringIsNotEmpty(data.email)) {
    showValidationMessage(emailFormInput, "Email must not be empty");
  } else if (!FormValidator.stringIsValidEmail(data.email)) {
    showValidationMessage(emailFormInput, "Must be a valid email address");
  } else {
    clearValidationMessage(emailFormInput);
  }

  // Message
  if (!FormValidator.stringIsNotEmpty(data.message)) {
    showValidationMessage(
      messageFormInput,
      "Message content must not be empty"
    );
  } else {
    clearValidationMessage(messageFormInput);
  }

  console.log(data);
});

function showValidationMessage(element, message) {
  const errorMessage = element.nextElementSibling;

  errorMessage.textContent = message;
  element.classList.add("invalid");
}

function clearValidationMessage(element) {
  const errorMessage = element.nextElementSibling;
  errorMessage.textContent = "";
  element.classList.remove("remove");
}

function clearAllValidation() {
  document.querySelectorAll(".form .error-message").forEach((errorMessage) => {
    errorMessage.textContent = "";
  });
  document.querySelectorAll(".form .invalid").forEach((input) => {
    input.classList.remove("invalid");
  });
}
