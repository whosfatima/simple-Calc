const allinpute = document.getElementById("all");
const correctinpute = document.getElementById("correct");
const incorrectinpute = document.getElementById("incorrect");
const button = document.querySelector("button");
const result = document.querySelector(".result");

button.addEventListener("click", () => {
  if (
    allinpute.value === "" ||
    correctinpute.value === "" ||
    incorrectinpute.value === ""
  ) {
    alert("عدد درست وارد کن. یه جای کارت میلنگه");
  }
  let all = Number(allinpute.value);
  let correct = Number(correctinpute.value);
  let incorrect = Number(incorrectinpute.value);
  if (correct + incorrect > all) {
    alert("جمع تعداد سوالات غلط و درست نباید از تعداد سوالات کل بیشتر باشه.");
  }
  let Percentage = ((correct * 3 - incorrect) / (correct * 3)) * 100;
  console.log(Percentage);
  result.style.visibility = "visible";
  result.innerHTML = Percentage.toFixed(2);
});
