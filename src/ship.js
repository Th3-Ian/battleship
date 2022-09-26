const modalModule = require('./modal.js');

function buildShip(name, length) {
  return {
    name: name,
    length: length,
    directions: [[], []],
    arr: new Array(length).fill('O'),
    horizontal: true,
    sunk: false,
    coordinates: [],
    getShipLength() {
      return `This ship is ${this.length}`;
    },
    getShipDirections() {
      for (let i = 0; i < this.arr.length; i++) {
        if (i != 0) {
          this.arr[0].push(i);
          this.arr[1].push(i * 10);
        } else {
          this.arr[0].push(i);
          this.arr[1].push(i);
        }
      }
    },
    hit(n) {
      let num = n - 1;
      if (num < this.arr.length) {
        this.arr.splice(num, 1, 'X');
        return this.arr;
      } else {
        throw Error('Hit misses');
      }
    },
    isSunk() {
      if (!this.arr.includes('O')) {
        //console.log(`${this.name} has been sunk!`);
        modalModule.openModal('Ship Sunk!', `${this.name} has been sunk!`);
        return (this.sunk = true);
      } else {
        return (this.sunk = false);
      }
    },
    toggleDirection() {
      this.horizontal = this.horizontal ? false : true;
    }
  };
}

module.exports = {
  buildShip
};
