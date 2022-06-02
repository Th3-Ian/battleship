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
        column = column.toString();

        this.squareArr.push(boardColumns[num] + column);
      }
      console.log(this.squareArr);
      return this.squareArr;
    }
  };
}

module.exports = {
  buildBoard
};

/*
class Board {
  constructor() {
    this.columns = 10;
    this.rows = 10;
  }
  buildDataSets() {
    //i is equivaliant to columns and e is rows
    for (i = 1; e < 11; i++) {
      if (i === 10) {
        e++;
        i = 0;
      }
      const div = document.createElement('div');
      div.dataset['box'];
      div.dataset.box = `${i}, ${e}`;
    }
  }
}
*/
