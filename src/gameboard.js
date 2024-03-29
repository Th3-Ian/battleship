const modalModule = require('./modal.js');
const indexModule = require('./index.js');

function buildBoard() {
  return {
    columns: 10,
    rows: 10,
    squareArr: [],
    hitArr: [],
    missedArr: [],
    placedShips: [],
    hitNum: 0,
    displayBoard() {
      for (let i = 0; i < this.columns * this.rows; i++) {
        const boardColumns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        let num = Math.floor(i / 10);
        let column = i + 1 - num * 10;

        this.squareArr.push(boardColumns[num] + column);
      }
      //console.log(this.squareArr);
      return this.squareArr;
    },
    isEmpty() {
      if (this.squareArr.includes('x' || 'o')) {
        return false;
      } else {
        return true;
      }
    },
    placeShip(ship, location, shipDiv) {
      let placement = this.squareArr.indexOf(location);
      let start = this.squareArr[placement];
      if (ship.horizontal === true) {
        let endPos = placement + ship.length - 1;
        let end = this.squareArr[endPos];
        try {
          for (i = 0; i < ship.length; i++) {
            if (start.charAt(0) != end.charAt(0)) {
              throw new Error('Cannot place, ship is out of bounds');
            } else if (this.squareArr[placement + i] === 'O') {
              throw new Error('Error: another ship is at this location');
            }

            ship.coordinates.push(placement + i);
            this.squareArr.splice(placement + i, 1, 'O');
          }
          this.placedShips.push(ship);
          indexModule.removeEL(shipDiv);
          indexModule.resetUI(shipDiv);
        } catch (err) {
          modalModule.openModal('Error', err);
          console.error(err);
          return;
        }
      } else if (ship.horizontal === false) {
        try {
          let end = this.squareArr[placement + ship.length * 10 - 10];
          //loop to check if ship placed before actually updating board
          for (i = 0; i < ship.length; i++) {
            if (end === undefined) {
              throw new Error('Cannot place, ship is out of bounds');
            } else if (placement < 0) {
              throw new Error('Error: another ship is at this location');
            } else if (this.squareArr[placement + i * 10] === 'O') {
              throw new Error('Error: another ship is at this location');
            }
          }
          //writes to gameboard
          for (i = 0; i < ship.length; i++) {
            ship.coordinates.push(placement + i * 10);
            this.squareArr.splice(placement + i * 10, 1, 'O');
          }
          this.placedShips.push(ship);
          indexModule.removeEL(shipDiv);
          indexModule.resetUI(shipDiv);
        } catch (err) {
          modalModule.openModal('ERROR!', err);
          console.error(err);
          return;
        }
      }
    },
    recieveAttack(coord, user) {
      //let coord = this.squareArr.indexOf(location);
      //coord = coord - 1;
      const placed = this.placedShips;
      try {
        if (this.squareArr[coord] === 'O') {
          //modalModule.openModal('Hit', "You've hit your target!");
          this.hitNum++;
          this.hitArr.push(coord);
          //console.log(this.hitArr);
          for (let i = 0; i < placed.length; i++) {
            for (let j = 0; j < placed[i].coordinates.length; j++) {
              //console.log(placed[i].name + placed[i].coordinates + coord);
              //console.log(typeof placed[i].coordinates[j]);
              //console.log(typeof coord);
              if (placed[i].coordinates[j] === parseInt(coord)) {
                placed[i].hit(j);
                placed[i].isSunk();
              }
            }
          }
          // call loop func that loops ships.coord on the board with the shipname === board.name
          // then grabs the index that matches the ship.coord and splices it in ship.arr
          this.squareArr.splice(coord, 1, 'X');
          indexModule.updateActvPlyr();
          this.gameLoss(user);
        } else if (this.squareArr[coord] === 'X') {
          if (user.name === 'Computer') indexModule.gameLoop();
          throw new Error('Error: Already attacked this location');
        } else {
          console.log('MISS!');
          this.missedArr.push(coord);
          //console.log(`This is the board missedArr ${this.missedArr}`);
          this.squareArr.splice(coord, 1, 'X');
          indexModule.updateActvPlyr();
          indexModule.gameLoop();
        }
      } catch (err) {
        console.log(err);
        if (user.name === 'Player') modalModule.openModal('ERROR!', err);
        indexModule.gameLoop();
        return;
      }
    },
    gameLoss(user) {
      let sunkShips = [];
      const placed = this.placedShips;
      for (let i = 0; i < placed.length; i++) {
        sunkShips.push(placed[i].sunk);
      }
      if (sunkShips.some((elm) => elm === false)) {
        sunkShips = [];
        indexModule.gameLoop();
      } else if (user.name === 'Player') {
        console.log('Game over');
        modalModule.openModal('WINNER WINNER', 'Congratulations! You Won :)');
        modalModule.addNewGameBtn();
        return;
      } else {
        console.log('Game over');
        modalModule.openModal('GAME OVER', 'You Lost :(');
        modalModule.addNewGameBtn();
      }
    },
    randPlace(ship, location, user) {
      //need try and catch if user places board hori and placement changes letter
      //catch needed if vertical placement ends with undefined arr
      let placement = this.squareArr.indexOf(location);
      let start = this.squareArr[placement];
      let randNumber = user.randomLoc();
      if (ship.horizontal === true) {
        let endPos = placement + ship.length - 1;
        let end = this.squareArr[endPos];
        try {
          for (i = 0; i < ship.length; i++) {
            if (start.charAt(0) != end.charAt(0)) {
              //console.log(`Start ${start.charAt(0)} End ${end.charAt(0)}`);
              throw new Error('Cannot place, ship is out of bounds');
            } else if (this.squareArr[placement + i] === 'O') {
              throw new Error('Error: another ship is at this location');
            }
            //ship.coordinates.push(this.squareArr[placement + i]);

            //let div = document.getElementById(placement);

            ship.coordinates.push(placement + i);
            this.squareArr.splice(placement + i, 1, 'O');
            //div.classList.add('ship');
            //console.log(ship.name + ' placed correctly');
          }
          this.placedShips.push(ship);
          //console.log(this.squareArr);
        } catch (err) {
          //let num = user.randomLoc();
          //console.log('this is the random number horizontal ' + randNumber);
          //console.log('this ship will be called again ' + ship);
          //console.error(err);
          this.randPlace(ship, randNumber, user);
          // func to alert screen of error
          // func to place ship again in diff location
        }
      } else if (ship.horizontal === false) {
        try {
          let end = this.squareArr[placement + ship.length * 10 - 10];
          //loop to check if ship placed before actually updating board
          for (i = 0; i < ship.length; i++) {
            if (end === undefined) {
              throw new Error('Cannot place, ship is out of bounds');
            } else if (placement < 0) {
              throw new Error('Error: another ship is at this location');
            } else if (this.squareArr[placement + i * 10] === 'O') {
              console.log('ANOTHER SHIP AT LOCATION ERROR CAUGHT');
              throw new Error('Error: another ship is at this location');
            }
          }
          //writes to gameboard
          for (i = 0; i < ship.length; i++) {
            //ship.coordinates.push(this.squareArr[placement + i * 10]);
            ship.coordinates.push(placement + i * 10);
            this.squareArr.splice(placement + i * 10, 1, 'O');
            //console.log(this.squareArr);
            //console.log(ship.name + ' placed correctly');
          }
          this.placedShips.push(ship);
        } catch (err) {
          //let num = user.randomLoc();
          console.log('this is the random number verticle ' + randNumber);
          console.log('this ship will be called again ' + ship);
          console.error(err);
          this.randPlace(ship, randNumber, user);
          // func to alert screen of error
          // func to place ship again in diff location
        }
      }
    }
  };
}

module.exports = {
  buildBoard
};
