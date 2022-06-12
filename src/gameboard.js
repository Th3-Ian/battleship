function buildBoard(name) {
  return {
    columns: 10,
    rows: 10,
    squareArr: [],
    missedArr: [],
    placedShips: [],
    name: name,
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
      //let coord = coord - 1;
      const placed = this.placedShips;
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
      } else {
        console.log('MISS!');
        this.missedArr.push(coord);
        console.log(`This is the board missedArr ${this.missedArr}`);
        this.squareArr.splice(coord, 1, 'X');
      }
    }
  };
}

module.exports = {
  buildBoard
};

/*
if placement.charAt(0) != board.squareArr(placement + ship.length).charAt(0) throw error

if board.squareArr[placement + ship.length] === undefined throw error

console.log(
        `This is the placement ${placement} starting place: ${start} and this is the end ${end} and this is the board ${this.squareArr}`
      );

*/
