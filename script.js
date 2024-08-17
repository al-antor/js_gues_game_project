function randomNumber() {
  let num = Math.floor(Math.random() * 10) + 1;
  return num;
}
function closeAll() {
  const button = document.querySelector(".input");
  button.style.display = "none";
  const reset = document.querySelector(".reset");
  reset.innerText = "Play Again";
}
function showList(arr) {
  let a = arr.join(" ");
  document.querySelector(".user-guess").innerText = a;
}
const submit = document.querySelector(".input");
const result = document.querySelector(".result");
const remain = document.querySelector(".choise-remain");
const reset = document.querySelector(".reset");
let userValue = document.querySelector(".user-input").value;
let random = randomNumber();
let choiseRemain = 3;
let inputList = [];
submit.addEventListener("click", (e) => {
  let userValue = document.querySelector(".user-input").value;
  if (userValue == random) {
    closeAll();
    choiseRemain--;
    remain.innerText = choiseRemain.toString();
    result.style.color = "green";
    inputList.push(userValue);
    result.innerText = "You Chose Correct One. You Win!";
    showList(inputList);
    submit.disabled = true;
    document.querySelector("input").value = "";
  } else {
    choiseRemain--;
    result.style.color = "red";
    inputList.push(userValue);
    remain.innerText = choiseRemain.toString();
    if (choiseRemain == 0) {
      closeAll();
      result.innerText = `Your choise is worng. You Lose\n computer choose: ${random}`;
      submit.disabled = true;
      document.querySelector("input").value = "";
      showList(inputList);
    } else {
      result.innerText = "Your choise is worng";
      document.querySelector("input").value = "";
      showList(inputList);
    }
  }
});

reset.addEventListener("click", (e) => {
  document.querySelector(".user-guess").innerText = "";
  result.innerText = "";
  remain.innerText = "3";
  choiseRemain = 3;
  document.querySelector("input").value = "";
  random = randomNumber();
  inputList = [];
  submit.disabled = false;
  submit.style.display = "inline-block";
  reset.innerText = "Reset";
});
