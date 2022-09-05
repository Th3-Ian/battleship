function Player(name, gameBoard, ships) {
  return {
    name: name,
    active: false,
    attacks: [],
    gameBoard: gameBoard,
    ships: ships,
    updateTurn() {
      this.active = this.active ? false : true;
    },
    randomNum() {
      let num = Math.floor(Math.random() * 100);
      if (this.attacks.includes(num) === false) {
        return num;
      } else {
        this.randomNum();
      }
    },
    randomLoc() {
      let rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      let num = Math.floor(Math.random() * 100);
      if (num < 10) {
        return 'a' + num;
      } else {
        num = num.toString().split('');
        let num1 = num[0];
        let num2 = num[1];
        num2 = parseInt(num2) + 1;
        num1 = rows[num1];
        return num1 + num2;
      }
    },
    randomBool() {
      var random_boolean = Math.random() < 0.5;
      return random_boolean;
    }
  };
}

module.exports = {
  Player
};
