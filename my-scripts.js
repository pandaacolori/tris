let xTurn=true

const playerx = document.querySelector(".playerOne")
  playerx.addEventListener("click", () => {
    let firstPlayer = prompt("What is your name?");
    const playerDiv = document.querySelector("#chics");
    playerDiv.innerText = firstPlayer;
});

const playero = document.querySelector(".playerTwo")
  playero.addEventListener("click", () => {
    let secondPlayer = prompt("What is your name?");
    const playerDiv = document.querySelector("#nans");
    playerDiv.innerText = secondPlayer;
});



const gridAll = document.querySelectorAll(".grid")
gridAll.forEach(cell => {
  cell.addEventListener("click", clickFunction, {once:true})
  })

function clickFunction(e) {
  const target = e.target;
  if (xTurn) {
    target.innerText = "X";
  } else {
    target.innerText = "O";
  }
  xTurn = !xTurn;
}

