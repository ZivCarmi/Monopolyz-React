class Player {
  constructor(username, character) {
    this.name = username;
    this.character = character;
  }

  money = 1000;

  getUsername() {
    return this.username;
  }

  getCharacter() {
    return this.character;
  }

  getMoney() {
    return this.money;
  }
}

export default Player;
