import CheckFormInputs from "./active-states.js";
import { FormValidator, ValidationMessageHandler } from "./validation.js";

const form = document.forms[0];
const firstNameFormInput = document.getElementById("firstName");
const lastNameFormInput = document.getElementById("lastName");
const emailFormInput = document.getElementById("email");
const radioDivs = document.querySelectorAll(".formRadio__div");
const messageFormInput = document.getElementById("message");
const checkboxInput = document.getElementById("consent");

const vmh = new ValidationMessageHandler(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  vmh.clearAllValidation();

  let formDataIsValid = true;

  const fd = new FormData(event.target);
  const data = Object.fromEntries(fd.entries());

  console.log(data);

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

  // consent button
  console.log(checkboxInput.value);
  if (!checkboxInput.checked) {
    vmh.showValidationMessage(
      checkboxInput,
      "To submit this form, please consent to being contacted"
    );
  }
});

// handle active state of radio buttons
radioDivs.forEach((radioDiv) => {
  radioDiv.addEventListener("click", function () {
    radioDivs.forEach((radioDiv) => {
      radioDiv.classList.remove("checked");
      radioDiv.firstElementChild.classList.remove("checked");
    });
    CheckFormInputs.checkRadio(radioDiv);
  });
});

// handle active state of consent checkbox
checkboxInput.addEventListener("change", function () {
  CheckFormInputs.checkCheckbox(checkboxInput);
});
