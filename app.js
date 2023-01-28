//1- Select form to prevent default
const form = document.querySelector("form");

//2- Select inputs to compare
const inputA = document.querySelectorAll("input")[0];
const inputB = document.querySelectorAll("input")[1];

//3- Select the error message and the button to change their style depending on the validation
const errorMessage = document.querySelector(".error-message");
const formButton = document.querySelector(".form-button");

//4- Create a simple function to validate if parameter B is grater than parameter A
const numbersValidation = function (numberA, numberB) {
  return numberA < numberB;
};

//5- Add an eventListener to the form element to prevent its default behavior
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

//6- Add an eventListener to the inputA element to realize the validation whenever it changes
inputA.addEventListener("keyup", (event) => {
  if (
    numbersValidation(event.target.value, inputB.value) ||
    !inputA.value ||
    !inputB.value
  ) {
    errorMessage.style.opacity = "0";
    formButton.style.cursor = "pointer";
    formButton.style.backgroundColor = "rgb(104, 255, 70)";
    inputA.classList.remove("input-error");
  } else {
    errorMessage.style.opacity = "1";
    formButton.style.cursor = "not-allowed";
    formButton.style.backgroundColor = "rgb(183, 183, 183)";
    inputA.classList.add("input-error");
  }
});

//6- Add an eventListener to the inputB element to realize the validation whenever it changes
inputB.addEventListener("keyup", (event) => {
  if (
    numbersValidation(inputA.value, event.target.value) ||
    !inputA.value ||
    !inputB.value
  ) {
    errorMessage.style.opacity = "0";
    formButton.style.cursor = "pointer";
    formButton.style.backgroundColor = "rgb(104, 255, 70)";
    inputA.classList.remove("input-error");
  } else {
    errorMessage.style.opacity = "1";
    formButton.style.cursor = "not-allowed";
    formButton.style.backgroundColor = "rgb(183, 183, 183)";
    inputA.classList.add("input-error");
  }
});
