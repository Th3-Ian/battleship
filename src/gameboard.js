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
      console.log(this.squareArr);
      return this.squareArr;
    },
    isEmpty() {
      if (this.squareArr.includes('x' || 'o')) {
        return false;
      } else {
        return true;
      }
    }
  };
}

module.exports = {
  buildBoard
};
