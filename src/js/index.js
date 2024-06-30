import FormValidator from "./validator.js";

const form = document.forms[0];
const firstNameFormInput = document.getElementById("firstName");
const lastNameFormInput = document.getElementById("lastName");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fd = new FormData(event.target);
  const data = Object.fromEntries(fd.entries());

  if (!FormValidator.stringIsNotEmpty(data.firstName)) {
    console.log("first name invalid");
    toggleInvalidOn(firstNameFormInput, message);
  } else {
    toggleInvalidOff(firstNameFormInput, message);
  }

  console.log(data);
});

function toggleInvalidOn(element, message) {
  element.classList.add("invalid");
  element.innerHTML = message;
}

function toggleInvalidOff(element, message) {
  element.classList.remove("remove");
  element.innerHTML = "";
}
