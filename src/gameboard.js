function buildBoard() {
  return {
    columns: 10,
    rows: 10,
    squareArr: [],
    missedArr: [],
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
      let end = this.squareArr[placement + ship.length];
      /*
      console.log(
        `This is the placement ${placement} starting place: ${start} and this is the end ${end} and this is the board ${this.squareArr}`
      );
			*/
      if (ship.horizontal === true) {
        try {
          for (i = 0; i < ship.length; i++) {
            if (start.charAt(0) != end.charAt(0)) {
              console.log(`Start ${start.charAt(0)} End ${end.charAt(0)}`);
              throw new Error('Cannot place, ship is out of bounds');
            }
            this.squareArr.splice(placement + i, 1, 'O');
          }
          console.log(this.squareArr);
        } catch (e) {
          console.error('ALERT Cannot place ship out of bounds');
          return e.message;
        }
      } else {
        try {
          for (i = 0; i < ship.length; i++) {
            if (end.charAt(0) === undefined) {
              throw new Error('Cannot place, ship is out of bounds');
            } else if (this.squareArr[placement + i * 10] === 'O') {
              throw new Error('Error: another ship is at this location');
            }
            this.squareArr.splice(placement + i * 10, 1, 'O');
          }
        } catch (e) {
          console.error('Testing Testing' + e);
          return e.message;
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

/*
if placement.charAt(0) != board.squareArr(placement + ship.length).charAt(0) throw error

if board.squareArr[placement + ship.length] === undefined throw error

*/
