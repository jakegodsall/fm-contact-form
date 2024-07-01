import { FormValidator, ValidationMessageHandler } from "./validation.js";

const form = document.forms[0];
const firstNameFormInput = document.getElementById("firstName");
const lastNameFormInput = document.getElementById("lastName");
const emailFormInput = document.getElementById("email");
const messageFormInput = document.getElementById("message");

const vmh = new ValidationMessageHandler(form);
console.log(vmh.inputs);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  vmh.clearAllValidation();

  let formDataIsValid = true;

  const fd = new FormData(event.target);
  const data = Object.fromEntries(fd.entries());

  // First Name
  if (!FormValidator.stringIsNotEmpty(data.firstName)) {
    vmh.showValidationMessage(
      firstNameFormInput,
      "First name must not be empty"
    );
    formDataIsValid = false;
  }

  // Last Name
  if (!FormValidator.stringIsNotEmpty(data.lastName)) {
    vmh.showValidationMessage(lastNameFormInput, "Last name must not be empty");
    formDataIsValid = false;
  }

  // Email
  if (!FormValidator.stringIsNotEmpty(data.email)) {
    vmh.showValidationMessage(emailFormInput, "Email must not be empty");
    formDataIsValid = false;
  } else if (!FormValidator.stringIsValidEmail(data.email)) {
    vmh.showValidationMessage(emailFormInput, "Must be a valid email address");
    formDataIsValid = false;
  }

  // Message
  if (!FormValidator.stringIsNotEmpty(data.message)) {
    vmh.showValidationMessage(
      messageFormInput,
      "Message content must not be empty"
    );
    formDataIsValid = false;
  }

  console.log(data);
});

// function disableSubmitButton() {
//   const submitButton = document.getElementById("submit-button");
//   submitButton.classList.add("disabled");
// }
