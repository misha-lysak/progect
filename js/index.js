const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 3560;
const lieDown = (totalTime / 5) * 2;
const squeeze = totalTime / 5;

berpeeAnimation();

function berpeeAnimation() {
  text.innerText = "Упор лежачи!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Віджатись";

    setTimeout(() => {
      text.innerText = "Піднятись ► Підстрибнути!";
      container.className = "container shrink";
    }, squeeze);
  }, lieDown);
}

setInterval(berpeeAnimation, totalTime);

