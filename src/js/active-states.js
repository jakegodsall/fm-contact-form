// Encapsulation of logic for applying active states to form inputs
export default class CheckFormInputs {
  constructor() {
    throw new Error("This class cannot be instantiated");
  }

  static checkRadio(div) {
    const radioButton = div.querySelector('input[type="radio"]');
    if (radioButton) {
      radioButton.checked = true;
      div.firstElementChild.classList.toggle("checked");
      div.classList.toggle("checked");
    }
  }

  static checkCheckbox(checkboxInput) {
    console.log(checkboxInput);
    const customCheckbox = checkboxInput.previousElementSibling;
    customCheckbox.classList.toggle("checked");
  }
}
