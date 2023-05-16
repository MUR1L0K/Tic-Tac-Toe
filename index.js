const gameTurn = document.getElementById("gameTurn");
let turnPlayer = "";
const boardRegions = document.querySelectorAll(".squareGame");
let vBoard = [];

function updateTurn() {
  const playerInput = document.getElementById(turnPlayer);
  document.getElementById("turnPlayer").innerText = playerInput.value;
}

function initializeGame() {
  const verification = document.getElementById("player01");
  const verification2 = document.getElementById("player02");
  if (verification.value == "" || verification2.value == "") {
    alert("Escreva o nome dos jogadores para começar!");
  } else {
    vBoard = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    turnPlayer = "player01";
    document.querySelector("h2").innerHTML =
      "Vez de: <span id='turnPlayer'></span> ";
    updateTurn();
    boardRegions.forEach(function (element) {
      element.classList.remove("win");
      element.innerText = "";
      element.addEventListener("click", handleBoardClick);
    });
  }
}

function disableRegion(element) {
  element.style.cursor = "default";
  element.removeEventListener("click", handleBoardClick);
}

function getWinRegions() {
  winRegions = [];
  if (
    vBoard[0][0] &&
    vBoard[0][0] == vBoard[0][1] &&
    vBoard[0][0] == vBoard[0][2]
  ) {
    winRegions.push("0.0", "0.1", "0.2");
  }
  if (
    vBoard[1][0] &&
    vBoard[1][0] == vBoard[1][1] &&
    vBoard[1][0] == vBoard[1][2]
  ) {
    winRegions.push("1.0", "1.1", "1.2");
  }
  if (
    vBoard[2][0] &&
    vBoard[2][0] == vBoard[2][1] &&
    vBoard[2][0] == vBoard[2][2]
  ) {
    winRegions.push("2.0", "2.1", "2.2");
  }
  if (
    vBoard[0][0] &&
    vBoard[0][0] == vBoard[1][0] &&
    vBoard[0][0] == vBoard[2][0]
  ) {
    winRegions.push("0.0", "1.0", "2.0");
  }
  if (
    vBoard[0][1] &&
    vBoard[0][1] == vBoard[1][1] &&
    vBoard[0][1] == vBoard[2][1]
  ) {
    winRegions.push("0.1", "1.1", "2.1");
  }
  if (
    vBoard[0][2] &&
    vBoard[0][2] == vBoard[1][2] &&
    vBoard[0][2] == vBoard[2][2]
  ) {
    winRegions.push("0.2", "1.2", "2.2");
  }
  if (
    vBoard[0][0] &&
    vBoard[0][0] == vBoard[1][1] &&
    vBoard[0][0] == vBoard[2][2]
  ) {
    winRegions.push("0.0", "1.1", "2.2");
  }
  if (
    vBoard[0][2] &&
    vBoard[0][2] == vBoard[1][1] &&
    vBoard[0][2] == vBoard[2][0]
  ) {
    winRegions.push("0.2", "1.1", "2.0");
  }
  return winRegions;
}
function handleWin(regions) {
  regions.forEach(function (region) {
    document
      .querySelector("[data-region='" + region + "']")
      .classList.add("win");
  });
  const playerName = document.getElementById(turnPlayer).value;
  document.querySelector("h2").innerHTML = `${playerName} Venceu!`;
}
function handleBoardClick(ev) {
  const span = ev.currentTarget;
  const region = ev.currentTarget.dataset.region; //N.N
  const rowColumnPair = region.split("."); // ["N", "N"]
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];
  if (turnPlayer == "player01") {
    span.innerText = "X";
    vBoard[row][column] = "X";
  } else {
    span.innerText = "O";
    vBoard[row][column] = "O";
  }
  console.clear();
  console.table(vBoard);
  disableRegion(span);
  const winRegions = getWinRegions();
  if (winRegions.length > 0) {
    handleWin(winRegions);
    boardRegions.forEach(function (element) {
      element.style.cursor = "default";
      element.removeEventListener("click", handleBoardClick);
    });
  } else if (vBoard.flat().includes("")) {
    turnPlayer = turnPlayer == "player01" ? "player02" : "player01";
    updateTurn();
  } else {
    document.querySelector("h2").innerHTML = "Empate!";
  }
}

document.getElementById("startGame").addEventListener("click", initializeGame);
