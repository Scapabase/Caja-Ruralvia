const cardNumber = document.querySelector(".card-ui__front-number");
const cardNumberInput = document.querySelector(".card-number-input");

const cardHolder = document.querySelector(".card-ui__front-holder-name");
const cardHolderInput = document.querySelector(".card-holder-input");

const expMonth = document.querySelector(".card-ui__front-exp-month");
const expMonthInput = document.querySelector(".month-input");

const expYear = document.querySelector(".card-ui__front-exp-year");
const expYearInput = document.querySelector(".year-input");

const cvv = document.querySelector(".card-ui__back-cvv");
const cvvInput = document.querySelector(".card-cvv-input");
const cardFront = document.querySelector(".card-ui__front");
const cardBack = document.querySelector(".card-ui__back");

cardNumberInput.addEventListener("keyup", (e) => {
  let inputValue = e.target.value;
  if (!inputValue) {
    cardNumber.innerHTML = "1234 5678 9101 1112";
    return false;
  }

  inputValue = Array.from(inputValue).reduce((acc, t, i) => {
    if (i > 0 && i % 4 == 0) acc += " ";
    acc += t;
    return acc;
  });

  cardNumber.innerHTML = inputValue;
});

cardHolderInput.addEventListener("keyup", (e) => {
  let inputValue = e.target.value;
  if (!inputValue) {
    cardHolder.innerHTML = "FULL NAME";
    return false;
  }

  cardHolder.innerHTML = inputValue;
});

expMonthInput.addEventListener("keyup", (e) => {
  let inputValue = e.target.value;
  if (!inputValue) {
    expMonth.innerHTML = "MM";
    return false;
  }

  expMonth.innerHTML = inputValue;
});

expYearInput.addEventListener("keyup", (e) => {
  let inputValue = e.target.value;
  if (!inputValue) {
    expYear.innerHTML = "MM";
    return false;
  }

  expYear.innerHTML = inputValue;
});

cvvInput.addEventListener("focus", () => {
  cardFront.style.transform = "perspective(1000px) rotateY(-180deg)";
  cardBack.style.transform = "perspective(1000px) rotateY(0deg)";
});

cvvInput.addEventListener("blur", () => {
  cardFront.style.transform = "perspective(1000px) rotateY(0deg)";
  cardBack.style.transform = "perspective(1000px) rotateY(180deg)";
});

cvvInput.addEventListener("keyup", (e) => {
  let inputValue = e.target.value;

  cvv.innerHTML = inputValue;
});
