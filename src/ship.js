function buildShip(name, length) {
	return {
		name: name,
		stretch: length,
		arr: new Array(length).fill('O'),
		getShipLength() {
			return `This ship is ${this.stretch}`;
		},
		hit(n) {
			let num = n - 1;
			if (num < this.arr.length) {
				this.arr[num] = 'X';
				return this.arr;
			} else {
				throw Error('Hit misses');
			}
		},
		sunk() {
			if (!this.arr.includes('O')) {
				return true
			} else {
				return false
			}
		}
	}
}

module.exports = {
	buildShip
}