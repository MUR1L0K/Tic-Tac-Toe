const player01 = document.getElementById("player01");
const player02 = document.getElementById("player02");
const gameTurn = document.getElementById("gameTurn");
const responseText = document.getElementById("gameResult");
let turn = 0;
/*
function startGame() {
  let gameEnd = false;
  while (gameEnd == false) {
    if (turn == 0) {
      gameTurn.innerText = `Vez de ${player01.value}`;
      turn++;
    } else if (turn == 1) {
      gameTurn.innerText = `Vez de ${player02.value}`;
      turn--;
    }
    gameEnd = true;
    gameOver();
  }
}
function gameOver() {
  responseText.innerText = `${player01.value} Venceu o jogo!`;
}
*/
document
  .querySelectorAll(".squareGame")
  .forEach("click", function (selectedSquare) {
    selectedSquare.addEventListener("click", function () {
      selectedSquare.innerText = "X";
    });
  });
