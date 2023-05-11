const player01 = document.getElementById("player01").value;
const player02 = document.getElementById("player02").value;
const gameTurn = document.getElementById("gameTurnText");
const responseText = document.getElementById("gameResultText");
const board = document.querySelectorAll(".squareGame");

function startGame() {
  let gameEnd = false;
  while (gameEnd == false) {
    if (turn == 0) {
      gameTurn.innerText = `Vez de ${player01}`;
      turn++;
    } else if (turn == 1) {
      gameTurn.innerText = `Vez de ${player02}`;
      turn--;
    }
    break;
  }
}
function gameOver() {
  responseText.innerText = `${player01} Venceu o jogo!`;
}
let turn = 0;

function jogada(ev) {
  if (turn == 0) {
    let square = ev.currentTarget;
    square.innerText = "X";
  } else if (turn == 1) {
    board.innerText = "O";
  }
}
