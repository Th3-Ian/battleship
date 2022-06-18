import './styles/main.scss';
const boardModule = require('./gameboard');
const shipModule = require('./ship.js');
const playerModule = require('./player.js');
// const domModule = require('./dom.js');
const shipTypesArr = [
  ['Carrier', 5],
  ['Battleship', 4],
  ['Cruiser', 3],
  ['Destroyer', 2]
];
let playersStart = [getName(), 'Computer'];

function startGame() {
  let playerName = getName();
  let fleet = buildFleet();
  let gameBoard = boardModule.buildBoard();
  //may need to make two fleets and gameboards if both players share the same one
  const player1 = new playerModule.Player(playerName, gameBoard, fleet);
  const computer = new playerModule.Player('Computer', gameBoard, fleet);
  setBoard();
}

function gameLoop(player) {
  //dom listener event for down click on div to recieveHit(div)
  player.gameBoard;
}

function endGame() {}

function getName() {
  //grab from txt in text box
}

function buildFleet() {
  let fleet = [];
  for (i = 0; i < shipTypesArr.length; i++) {
    let ship = shipModule.buildShip(shipTypesArr[i][0], shipTypesArr[i][1]);
    fleet.push(ship);
  }
  return fleet;
}

function setBoard() {
  // places ships onto board via drag and drop for player1
}
