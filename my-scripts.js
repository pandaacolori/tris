let xTurn=true
const reset = document.querySelector("#reset")

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
const winCondition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let board = ["", "", "", "", "", "", "", "", ""];

function checkWinCondition() {
  for (let winnies of winCondition) { 
    const [a, b, c] = winnies;  

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      if (xTurn) {
        const winnerName = document.querySelector("#chics").innerText
        alert(winnerName + " vince!");
      }
      else {
        const winnerName = document.querySelector("#nans").innerText
        alert(winnerName + " vince!")
      }
      return true;
    }
  }
  return false;
}
/*CLICKING FUNCTION*/

const gridAll = document.querySelectorAll(".grid")
gridAll.forEach(cell => {
  cell.addEventListener("click", clickFunction, {once:true})
  })

function clickFunction(e) {
  const target = e.target;
  const index = [...gridAll].indexOf(target); /*... makes a node list into an array!*/
  if (xTurn) {
    target.innerText = "X";
    board[index] = "X";
    checkWinCondition();
  } else {
    target.innerText = "O";
    board[index] = "O";
    checkWinCondition();
  }
  console.log(board)
  xTurn = !xTurn;
}
/*RESET BUTTON*/
reset.addEventListener("click",() => {
  gridAll.forEach(cell => {
    cell.innerText = ""
    board = ["", "", "", "", "", "", "", "", ""];
    cell.addEventListener("click", clickFunction, {once:true});
    })
  xturn=true;

}
)

