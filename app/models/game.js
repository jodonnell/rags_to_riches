import Inventory from './inventory.js';
import Messages from './messages.js';

class Game {
    constructor() {
        this.inventory = new Inventory();
        this.messages = new Messages();
    }

    tick() {
        this.messages.add('bang!');
    }

    askForMoney() {
        this.inventory.dollars += 1;
    }

    buyHat() {
        this.inventory.dollars -= 10;
        this.inventory.hats += 1;
    }
}

export default Game;
