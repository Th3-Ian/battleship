function Player(name, gameBoard) {
  return {
    name: name,
    active: false,
    attacks: [],
    gameBoard: gameBoard,
    ships: [],
    updateTurn() {
      this.active = this.active ? false : true;
    },
    randomAttack() {
      let num = Math.floor(Math.random() * 100);
      if (this.attacks.includes(num) === false) {
        return num;
      } else {
        this.randomAttack();
      }
    }
  };
}

module.exports = {
  Player
};
