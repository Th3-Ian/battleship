import './styles/main.scss';
const boardModule = require('./gameboard');
const shipModule = require('./ship.js');
const playerModule = require('./player.js');
const modalModule = require('./modal.js');

const shipTypesArr = [
  ['Carrier', 5],
  ['Battleship', 4],
  ['Cruiser', 3],
  ['Submarine', 3],
  ['Destroyer', 2]
];

const horizontalBtn = document.getElementById('horizontal');
let countdownNum = 0;
const playersStart = ['Player', 'Computer'];
const player = buildPlayer(playersStart[0]);
const computer = buildComputer(playersStart[1]);

function startGame() {
  setBoard(player);
  displayFleet(player);
  setBoard(computer);
  document.getElementById('shuffle').addEventListener(
    'click',
    () => {
      shuffleShips(player);
    },
    { once: true }
  );
  shipEvents(player);
}

function buildPlayer(name) {
  let fleet = buildFleet();
  let gameBoard = boardModule.buildBoard();
  const player = new playerModule.Player(name, gameBoard, fleet);
  player.gameBoard.displayBoard();
  player.active = true;
  return player;
}

function buildComputer(name) {
  let fleet = buildFleet();
  let gameBoard = boardModule.buildBoard();
  const computer = new playerModule.Player(name, gameBoard, fleet);
  computer.gameBoard.displayBoard();
  shuffleShips(computer);
  return computer;
}

export function gameLoop() {
  const randNum = player.randomNum();
  if (player.active === true) {
    //alert('player called');
    makeAttack();
  } else if (computer.active === true) {
    //alert('Computer called');
    clearBoard(player);
    shipBoardDisplay(player);
    //console.log('Computer randNum ' + randNum);
    player.gameBoard.recieveAttack(randNum, computer);
  }
}

function makeAttack() {
  clearBoard(computer);
  shipBoardDisplay(computer);
  const squareDivs = document.querySelectorAll(`.comp-square`);
  for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].addEventListener('click', (e) => {
      //alert('Event Listener Called');
      let sqrNum = squareDivs[i].dataset.num;
      computer.gameBoard.recieveAttack(sqrNum, player);
      //ship.setAttribute('class', 'hidden');
      //call function from gameboard after successful placement to remove event listener
      //look into using clone node function to just remove the old obj
    });
    squareDivs[i].addEventListener('mouseover', () => {
      squareDivs[i].classList.add('selected');
    });
    squareDivs[i].addEventListener('mouseout', () => {
      squareDivs[i].classList.remove('selected');
    });
  }
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

  //console.log('this is the gameboard length' + user.gameBoard.squareArr.length);
  // places ships onto board via drag and drop for player1
  if (user.name === 'Computer') {
    for (let i = 0; i < user.gameBoard.squareArr.length; i++) {
      let td = document.createElement('td');
      let num = Math.floor(i / 10) + 1;
      let row = document.querySelector(`#computerRow${num}`);
      td.textContent = user.gameBoard.squareArr[i];
      td.setAttribute('id', `${user.gameBoard.squareArr[i]}`);
      td.setAttribute('class', 'comp-square');
      td.setAttribute('data-num', `${i}`);
      row.appendChild(td);
    }
    return;
  } else if (user.name === 'Player') {
    for (let i = 0; i < user.gameBoard.squareArr.length; i++) {
      let td = document.createElement('td');
      let num = Math.floor(i / 10) + 1;
      let row = document.querySelector(`#playerRow${num}`);
      td.textContent = user.gameBoard.squareArr[i];
      td.setAttribute('id', `${user.gameBoard.squareArr[i]}`);
      td.setAttribute('data-num', `${i}`);
      td.setAttribute('class', 'player-square');
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
  div.setAttribute('class', `${ship.name} ship-container`);
  div.setAttribute('id', `${ship.name}`);
  for (let i = 0; i < ship.length; i++) {
    /*
    const shipPart = document.createElement('div');
    shipPart.setAttribute('class', 'ship');

    div.appendChild(shipPart);
		*/
  }
  childContainer.appendChild(shipName);
  childContainer.appendChild(div);
  container.appendChild(childContainer);
}

function shuffleShips(user) {
  let shipsArr = [];
  for (let i = 0; i < user.ships.length; i++) {
    shipsArr.push(user.ships[i].name);
  }

  for (let i = 0; i < user.ships.length; i++) {
    let num = user.randomLoc();
    user.ships[i].horizontal = user.randomBool();
    user.gameBoard.randPlace(user.ships[i], num, user);
  }

  if (user.name === 'Player') {
    clearBoard(user);
    shipBoardDisplay(user);
    gameLoop(user);
  }
}

function clearBoard(user) {
  let name = user.name.toLowerCase();
  const tbody = document.getElementById(`${name}Board`);
  const tds = tbody.querySelectorAll('td');
  Array.prototype.forEach.call(tds, function (node) {
    node.parentNode.removeChild(node);
  });
  setBoard(user);
}

function selectShip(ship, player) {
  const shipDivs = document.getElementsByClassName('ship-container');
  const shipArr = Array.prototype.slice.call(shipDivs);
  shipArr.forEach(function (e) {
    e.classList.remove('selected');
  });
  ship.classList.add('selected');
  addHoriListener(ship, player);

  boardAddEvents(ship, player);
}

function addHoriListener(ship, player) {
  const shipId = ship.id;
  let shipObj = player.ships.find((ship) => ship.name === shipId);
  horizontalBtn.addEventListener('click', () => {
    shipObj.toggleDirection();
    horizontalBtn.textContent = '';
    shipObj.horizontal === true
      ? (horizontalBtn.textContent = 'Horizontal')
      : (horizontalBtn.textContent = 'Verticle');
  });
}

export function resetUI(ship) {
  const squareDivs = document.getElementsByClassName('ship-container');
  for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].classList.remove('selected');
  }
  horizontalBtn.textContent = 'Horizontal';
}

function boardAddEvents(ship, player) {
  const squareDivs = document.getElementsByClassName('player-square');
  const shipId = ship.id;
  for (let i = 0; i < squareDivs.length; i++) {
    let shipObj = player.ships.find((ship) => ship.name === shipId);
    squareDivs[i].addEventListener('click', (e) => {
      let sqrId = squareDivs[i].id;
      player.gameBoard.placeShip(shipObj, sqrId, ship);

      clearBoard(player);
      shipBoardDisplay(player);
      //ship.setAttribute('class', 'hidden');
      //call function from gameboard after successful placement to remove event listener
      //look into using clone node function to just remove the old obj
    });
    squareDivs[i].addEventListener('mouseover', () => {
      squareDivs[i].classList.add('selected');
    });
    squareDivs[i].addEventListener('mouseout', () => {
      squareDivs[i].classList.remove('selected');
    });
  }
}

function shipEvents(player) {
  const shipContainers = document.getElementsByClassName('ship-container');

  for (let i = 0; i < shipContainers.length; i++) {
    shipContainers[i].addEventListener('click', (e) => {
      selectShip(e.target, player);
    });
  }
}

export function updateActvPlyr() {
  player.toggleActive();
  computer.toggleActive();
}

function shipBoardDisplay(user) {
  let placedArr = [];
  let name = user.name.toLowerCase();
  const tbody = document.getElementById(`${name}Board`);
  for (const ship of user.ships) {
    for (i = 0; i < ship.coordinates.length; i++) {
      placedArr.push(ship.coordinates[i]);
    }
  }
  addHitClass(user);
  addMissClass(user);
  if (name === 'player') {
    for (i = 0; i < placedArr.length; i++) {
      console.log(placedArr[i]);
      let div = tbody.querySelector(`[data-num='${placedArr[i]}']`);
      div.classList.add('ship');
    }
  }
}

function addHitClass(user) {
  let name = user.name.toLowerCase();
  const tbody = document.getElementById(`${name}Board`);
  let hitArray = user.gameBoard.hitArr;
  console.log('hit class called');
  if (hitArray === []) return;
  for (i = 0; i < hitArray.length; i++) {
    let div = tbody.querySelector(`[data-num='${hitArray[i]}']`);
    div.classList.add('hit-space');
  }
}

function addMissClass(user) {
  let name = user.name.toLowerCase();
  const tbody = document.getElementById(`${name}Board`);
  let missArray = user.gameBoard.missedArr;
  console.log('miss class called');
  if (missArray === []) return;
  for (i = 0; i < missArray.length; i++) {
    let div = tbody.querySelector(`[data-num='${missArray[i]}']`);
    div.classList.add('miss-space');
  }
}

export function removeEL(elm) {
  elm.replaceWith(elm.cloneNode(true));
  countdownNum++;
  if (countdownNum === 5) gameLoop(player);
}

document.getElementById('overlay').addEventListener('click', () => {
  modalModule.closeModal();
});
document.getElementById('closeModal').addEventListener('click', () => {
  modalModule.closeModal();
});

document.getElementById('newGame').addEventListener('click', () => {
  location.reload();
});

document.getElementById('start').addEventListener(
  'click',
  () => {
    startGame();
  },
  { once: true }
);

/*

*** placing use ship todo
 1 - dom listener to drag ship to board location. Then grabs location and ship to call gameboard place ship

 *** update scss file to have 'glass like' look to game

*/
