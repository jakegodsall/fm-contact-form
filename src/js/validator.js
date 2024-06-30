export default class FormValidator {
  static stringIsNotEmpty(input) {
    return input.length !== 0;
  }

  static stringIsValidEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }
}
