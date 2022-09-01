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
    let shipName = document.createElement('div');
    shipName.textContent = user.ships[i].name + ' ' + user.ships[i].length;

    shipDivs(user.ships[i], fleetContainer, user, shipName);
  }
}

function shipDivs(ship, container, user, shipName) {
  const childContainer = document.createElement('div');
  const div = document.createElement('div');
  div.className = 'ship-container';
  div.classList.add(user.ships.name);
  for (let i = 0; i < ship.length; i++) {
    const shipPart = document.createElement('div');
    shipPart.className = 'ship';

    div.appendChild(shipPart);
  }
  childContainer.appendChild(shipName);
  childContainer.appendChild(div);
  container.appendChild(childContainer);
}

document.getElementById('start').addEventListener('click', () => {
  startGame();
});
//startGame();

/*
*** placing use ship todo
 1 - add button for each shipDiv to transition ship.horizontal true : false
 2 - dom listener to drag ship to board location. Then grabs location and ship to call gameboard place ship
   ^^ dom listener should change each location classname to include the '.ship' class
   ^^ other func called from dom listener should change .ship-container display: hidden
Need to figure out how to connect user.ship to carrier div for gameboard.placeShip()
		^^ Try using the player const inside of start game


*** attacking
 1 - dom listener put in gameloop func to call gameboard.receiveAttack()
		^^ create two new css classes for hit and miss for the board divs

*** Complete gameboard.randPlace() to shuffle computer placements
	Connect to shuffle button at bottom of board for player shuffle placements

*** Create modal to display thrown errors

*** Create modal for game over with reset btn and play again btn
*/
