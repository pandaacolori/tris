const playerx = document.querySelector(".playerOne")
  playerx.addEventListener("click", () => {
    let firstPlayer = prompt("What is your name?");
    const playerDiv = document.querySelector("#chics");
    playerDiv.innerText = firstPlayer;
});

const playero= document.querySelector(".playerTwo")
  playero.addEventListener("click", () => {
    let secondPlayer = prompt("What is your name?");
    const playerDiv = document.querySelector("#babs");
    playerDiv.innerText = secondPlayer;
});