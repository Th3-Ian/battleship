function buildBoard() {
  return {
    columns: 10,
    rows: 10,
    squareArr: [],
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
    placeShip(ship, location) {
      //need try and catch if user places board hori and placement changes letter
      //catch needed if vertical placement ends with undefined arr
      let placement = this.squareArr.indexOf(location);
      let start = this.squareArr[placement];
      document.getElementById(location).classList.add('ship');

      if (ship.horizontal === true) {
        try {
          let end = this.squareArr[placement + ship.length];
          for (i = 0; i < ship.length; i++) {
            if (start.charAt(0) != end.charAt(0)) {
              //console.log(`Start ${start.charAt(0)} End ${end.charAt(0)}`);
              throw new Error('Cannot place, ship is out of bounds');
            } else if (this.squareArr[placement + i] === 'O') {
              throw new Error('Error: another ship is at this location');
            }
            //ship.coordinates.push(this.squareArr[placement + i]);
            this.placedShips.push(ship);
            ship.coordinates.push(placement + i);
            this.squareArr.splice(placement + i, 1, 'O');
          }
        } catch (e) {
          console.error('ALERT Cannot place ship out of bounds');
          return e.message;
          // func to alert screen of error
          // func to place ship again in diff location
        }
      } else {
        try {
          let end = this.squareArr[placement + ship.length * 10];
          for (i = 0; i < ship.length; i++) {
            if (end === undefined) {
              throw new Error('Cannot place, ship is out of bounds');
            } else if (this.squareArr[placement + i * 10] === 'O') {
              throw new Error('Error: another ship is at this location');
            }
            //ship.coordinates.push(this.squareArr[placement + i * 10]);
            this.placedShips.push(ship);
            ship.coordinates.push(placement + i * 10);
            this.squareArr.splice(placement + i * 10, 1, 'O');
          }
        } catch (e) {
          console.log('this error msg is working');
          console.error(e);
          return e.message;
          // func to alert screen of error
          // func to place ship again in diff location
        }
      }
    },
    recieveAttack(coord) {
      coord = coord - 1;
      const placed = this.placedShips;
      try {
        if (this.squareArr[coord] === 'O') {
          console.log('HIT!');
          this.hitNum++;

          for (let i = 0; i < placed.length; i++) {
            for (let j = 0; j < placed[i].coordinates.length; j++) {
              if (placed[j].coordinates[j] === coord) {
                placed[i].hit(j);
                placed[i].isSunk();
              }
            }
          }
          // call loop func that loops ships.coord on the board with the shipname === board.name
          // then grabs the index that matches the ship.coord and splices it in ship.arr
          this.squareArr.splice(coord, 1, 'X');
        } else if (this.squareArr[coord] === 'X') {
          throw new Error('Error: Already attacked this location');
        } else {
          console.log('MISS!');
          this.missedArr.push(coord);
          console.log(`This is the board missedArr ${this.missedArr}`);
          this.squareArr.splice(coord, 1, 'X');
        }
      } catch (e) {
        console.log(e);
        return e.message;
      }
    },
    gameLoss() {
      const placed = this.placedShips;
      for (let i = 0; i < placed.length; i++) {
        if (placed[i].sunk === false) {
          break;
        } else {
          console.log('Game over');
          return 'Game Over';
        }
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

            this.placedShips.push(ship);
            ship.coordinates.push(placement + i);
            this.squareArr.splice(placement + i, 1, 'O');
            //div.classList.add('ship');
            //console.log(ship.name + ' placed correctly');
          }
          //console.log(this.squareArr);
        } catch (e) {
          //let num = user.randomLoc();
          console.log('this is the random number horizontal ' + randNumber);
          console.log('this ship will be called again ' + ship);
          console.error(e);
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
              console.log('BUG FIXED');
              throw new Error('Error: another ship is at this location');
            } else if (this.squareArr[placement + i * 10] === 'O') {
              console.log('ANOTHER SHIP AT LOCATION ERROR CAUGHT');
              throw new Error('Error: another ship is at this location');
            }
          }
          //writes to gameboard
          for (i = 0; i < ship.length; i++) {
            //ship.coordinates.push(this.squareArr[placement + i * 10]);
            this.placedShips.push(ship);
            ship.coordinates.push(placement + i * 10);
            this.squareArr.splice(placement + i * 10, 1, 'O');
            //console.log(this.squareArr);
            //console.log(ship.name + ' placed correctly');
          }
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
