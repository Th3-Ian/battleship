function buildBoard() {
	return{
	columns: 10,
	rows: 10,
	squareArr: [],
	displayBoard() {
		for (let i = 0; i< this.columns * this.rows; i++ ) {
			const square = i;
			this.squareArr.push(square);
		}
		//console.log(this.squareArr.length)
		return this.squareArr;
	}
	}
}

module.exports = {
	buildBoard
}