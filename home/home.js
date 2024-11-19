const bmiCalculateBtn = document.getElementById("bmi-calculate-button");
const bmiResult = document.getElementById("bmi-result");
const maleBtn = document.getElementById("male-selected-button");
const femaleBtn = document.getElementById("female-selected-button");
const personheight = document.getElementById("height");
const myInput = document.getElementById("myinput");
const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const personWeight = document.getElementById("weight");
const agePlus = document.getElementById("age-plus");
const ageMinus = document.getElementById("age-minus");
const ageInput = document.getElementById("age");
const bmiSuggest = document.getElementById("bmi-suggest");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementById("popup");

// For pointer slide
let selectedGender = "";
let height = 0;
let weight = 0.0;
let age = 0.0;
let bmi = 0.0;
document.getElementById("myinput").oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #EA3369 0%, #EA3369 " +
    value +
    "%, #fff " +
    value +
    "%, white 100%)";
  height = this.value;
  personheight.innerHTML = `${height}  <span class="unit">FT</span>`;
  // Log the updated height inside the oninput functin
};

// Set the range to 0 on page load
myInput.value = 0;
myInput.oninput(); // Trigger oninput to update the background and text

maleBtn.addEventListener("click", () => {
  selectedGender = "male";
  maleBtn.classList.add("selected-gender-button");
  femaleBtn.classList.remove("selected-gender-button");
});

femaleBtn.addEventListener("click", () => {
  selectedGender = "female";
  femaleBtn.classList.add("selected-gender-button");
  maleBtn.classList.remove("selected-gender-button");
});

plusButton.addEventListener("click", () => {
  weight = parseFloat(weight);
  weight += 5.5;
  weight = weight.toFixed(2);
  personWeight.innerHTML = `${weight} <span class='lbs'>lbs</span>`;
});

minusButton.addEventListener("click", () => {
  weight = parseFloat(weight);
  if (weight > 0) {
    weight -= 0.5;
  }
  weight = weight.toFixed(2);
  personWeight.innerHTML = `${weight} <span class='lbs'>lbs</span>`;
});

agePlus.addEventListener("click", () => {
  age = parseFloat(age);
  age++;
  age = age.toFixed(2);
  ageInput.innerHTML = `${age} <span class='lbs'>Yrs</span>`;
});
ageMinus.addEventListener("click", () => {
  if (age > 0) {
    age--;
    age = age.toFixed(2);
    ageInput.innerHTML = `${age} <span class='lbs'>Yrs</span>`;
  }
});

bmiCalculateBtn.addEventListener("click", () => {
  height = parseFloat(height * 12);
  let sqHeight = height * height;
  if (!selectedGender || weight <= 0 || height <= 0 || age <= 0) {
    bmiSuggest.innerHTML = `<span class="error">All Fields Are Mandatory !!!</span>`;
  } else {
    bmi = (weight / sqHeight) * 703;
    bmiResult.innerHTML = `${bmi.toFixed(2)}`;
    checkSugession();
  }
  function checkSugession() {
    if (selectedGender == "male") {
      if (bmi >= 30) {
        bmiSuggest.innerHTML = `<span>You are in Obesity !!</span>`;
      } else if (bmi >= 25 && bmi <= 29.9) {
        bmiSuggest.innerHTML = `<span>You are Overweight !!</span>`;
      } else if (bmi > 18.5 && bmi <= 24.9) {
        bmiSuggest.innerHTML = `<span>You have Normal Weight !!</span>`;
      } else {
        bmiSuggest.innerHTML = `<span>You are Underweight !!</span>`;
      }
    } else if (selectedGender == "female") {
      if (bmi >= 30) {
        bmiSuggest.innerHTML = `<span>You are in Obesity !!</span>`;
      } else if (bmi >= 25 && bmi <= 29.9) {
        bmiSuggest.innerHTML = `<span>You are Overweight !!</span>`;
      } else if (bmi > 18.5 && bmi <= 24.9) {
        bmiSuggest.innerHTML = `<span>You have Normal Weight !!</span>`;
      } else {
        bmiSuggest.innerHTML = `<span>You are Underweight !!</span>`;
      }
    }
  }
  popup.classList.remove("popup-hidden");
});

closePopup.addEventListener("click", () => {
  popup.classList.add("popup-hidden");
});

// popup.addEventListener("click", (event) => {
//   console.log(event.target);
//   //    event.target
// });

//----------------------------Daily Practice--------------------------//
