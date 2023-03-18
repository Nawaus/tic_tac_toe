const main = document.querySelector("main");
const btn = document.querySelectorAll(".btn");

main.addEventListener("click", (e) => {
  const el = e.target;

  console.log(el);

  const arrayDraw = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
});

const firstInputPlayer = document.querySelector("#player-1");
const secondInputPlayer = document.querySelector("#player-2");

const btnsNames = document.querySelectorAll(".send-value");

btnsNames[0].addEventListener("click", () => {
  document.querySelector(".player-1").textContent =
    document.querySelector("#player-1").value + ": ";
});

btnsNames[1].addEventListener("click", () => {
  document.querySelector(".player-2").textContent =
    document.querySelector("#player-2").value + ": ";
});
