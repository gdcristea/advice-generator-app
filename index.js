let adviceID = document.getElementById("adviceID");
let adviceText = document.getElementById("adviceText");
const btn = document
  .getElementById("diceImgContainer")
  .addEventListener("click", getData);

function getData() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((obj) => {
      adviceID.innerHTML = obj.slip.id;
      adviceText.innerHTML = `“${obj.slip.advice}”`;
    });
}
