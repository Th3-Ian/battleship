function buildShip(name, stretch) {
	return {
		name: name,
		stretch: stretch,
		directions: [[], []],
		arr: new Array(stretch).fill('O'),
		horizontal: true,
		getShipLength() {
			return `This ship is ${this.stretch}`;
		},
		getShipDirections() {
			for(let i = 0; i < this.arr.length; i++) {
				if(i != 0) {
					this.arr[0].push(i);
					this.arr[1].push(i*10);
				} else {
					this.arr[0].push(i);
					this.arr[1].push(i);
				}
			}
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
		},
		toggleDirection() {
			this.horizontal = this.horizontal? false : true;
			console.log(this.horizontal);
		}
	}
}

//let testShip = buildShip(4);

module.exports = {
	buildShip
}