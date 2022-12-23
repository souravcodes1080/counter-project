let increase = document.getElementById("increase");
let reset = document.getElementById("reset");
let decrease = document.getElementById("decrease");
let int = document.getElementById("number");
let count = 0;

increase.addEventListener("click", function () {
  count++;
  int.innerHTML = count;
});

reset.addEventListener("click", function () {
  count = 0;
  int.innerHTML = count;
});

decrease.addEventListener("click", function () {
  count--;
  int.innerHTML = count;
});
