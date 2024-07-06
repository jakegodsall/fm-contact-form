import { FormValidator, ValidationMessageHandler } from "./validation.js";

const form = document.forms[0];
const firstNameFormInput = document.getElementById("firstName");
const lastNameFormInput = document.getElementById("lastName");
const emailFormInput = document.getElementById("email");
const radioDivs = document.querySelectorAll(".formRadio__div");
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

radioDivs.forEach((radioDiv) => {
  console.log(radioDiv);
  radioDiv.addEventListener("click", function () {
    radioDivs.forEach((radioDiv) => {
      radioDiv.classList.remove("checked");
      radioDiv.firstElementChild.classList.remove("checked");
    });
    checkRadio(radioDiv);
  });
});

function checkRadio(div) {
  const radioButton = div.querySelector('input[type="radio"]');
  if (radioButton) {
    radioButton.checked = true;
    div.firstElementChild.classList.toggle("checked");
    div.classList.toggle("checked");
  }
}
