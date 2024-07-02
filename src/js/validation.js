export class FormValidator {
  constructor() {
    throw new Error("This class cannot be instantiated");
  }

  static stringIsNotEmpty(input) {
    return input.length !== 0;
  }

  static stringIsValidEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }
}

export class ValidationMessageHandler {
  constructor(form) {
    this.form = form;
    this.inputs = Array.from(form.elements);
  }

  showValidationMessage(element, message) {
    const errorMessage = element.nextElementSibling;
    errorMessage.textContent = message;
    element.classList.add("invalid");
  }

  clearValidationMessage(element) {
    const errorMessage = element.nextElementSibling;
    errorMessage.textContent = "";
    element.classList.remove("remove");
  }

  clearAllValidation() {
    this.inputs
      .filter(
        (input) =>
          input.type === "text" ||
          input.type === "email" ||
          input.type === "textarea"
      )
      .forEach((element) => {
        const errorMessage = element.nextElementSibling;
        errorMessage.textContent = "";
      });
    this.inputs.forEach((input) => {
      input.classList.remove("invalid");
    });
  }
}

