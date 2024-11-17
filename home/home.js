// For pointer slide
document.getElementById("myinput").oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #EA3369 0%, #EA3369 " +
    value +
    "%, #fff " +
    value +
    "%, white 100%)";
};
