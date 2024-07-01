export default class FormValidator {
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
