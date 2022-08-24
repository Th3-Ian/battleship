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
    randomBool() {
      var random_boolean = Math.random() < 0.5;
      return random_booleanl;
    }
  };
}

module.exports = {
  Player
};
