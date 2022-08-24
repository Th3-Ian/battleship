import './styles/main.scss';
const boardModule = require('./gameboard');
const shipModule = require('./ship.js');
const playerModule = require('./player.js');
// const domModule = require('./dom.js');
const shipTypesArr = [
  ['Carrier', 5],
  ['Battleship', 4],
  ['Cruiser', 3],
  ['Submarine', 3],
  ['Destroyer', 2]
];
let playersStart = ['Ian', 'Computer'];

function startGame() {
  console.log('start game one time');
  const player = buildPlayer(playersStart[0]);
  const computer = buildComputer(playersStart[1]);

  setBoard(player);
  displayFleet(player);
  setBoard(computer);
}

function buildPlayer(name) {
  let fleet = buildFleet();
  let gameBoard = boardModule.buildBoard();
  const player = new playerModule.Player(name, gameBoard, fleet);
  player.gameBoard.displayBoard();
  return player;
}

function buildComputer(name) {
  console.log('build pc one time');
  let fleet = buildFleet();
  let gameBoard = boardModule.buildBoard();
  const computer = new playerModule.Player(name, gameBoard, fleet);
  computer.gameBoard.displayBoard();
  return computer;
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
  for (let i = 0; i < shipTypesArr.length; i++) {
    let ship = shipModule.buildShip(shipTypesArr[i][0], shipTypesArr[i][1]);
    fleet.push(ship);
  }
  return fleet;
}

function setBoard(user) {
  const playerBoard = document.querySelector('#playerBoard');
  const compBoard = document.querySelector('#compBody');

  console.log('this is the gameboard length' + user.gameBoard.squareArr.length);
  // places ships onto board via drag and drop for player1
  if (user.name === 'Computer') {
    for (let i = 0; i < user.gameBoard.squareArr.length; i++) {
      let td = document.createElement('td');
      let num = Math.floor(i / 10) + 1;
      let row = document.querySelector(`#compRow${num}`);
      //console.log(row);
      //console.log('compRow' + num);
      td.textContent = user.gameBoard.squareArr[i];
      row.appendChild(td);
    }
    return;
  } else if (user.name === 'Ian') {
    for (let i = 0; i < user.gameBoard.squareArr.length; i++) {
      let td = document.createElement('td');
      let num = Math.floor(i / 10) + 1;
      let row = document.querySelector(`#playerRow${num}`);
      td.textContent = user.gameBoard.squareArr[i];
      row.appendChild(td);
    }
  }
}

function displayFleet(user) {
  const fleetContainer = document.querySelector('.boats');

  for (let i = 0; i < user.ships.length; i++) {
    let div = document.createElement('div');
    div.textContent = user.ships[i].name + ' ' + user.ships[i].length;
    fleetContainer.appendChild(div);
    shipDivs(user.ships[i], fleetContainer);
  }
}

function shipDivs(ship, container) {
  const div = document.createElement('div');
  div.className = 'ship-container';
  for (let i = 0; i < ship.length; i++) {
    const shipPart = document.createElement('div');
    shipPart.className = 'ship';
    div.appendChild(shipPart);
  }
  container.appendChild(div);
}

startGame();

// PROBLEM query selector for gameboard rows starts selecting table data instead of next row
// Potential fix is add ids to all rows and increasing the row selected by using `row${num + 1}`
