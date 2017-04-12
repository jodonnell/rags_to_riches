import Inventory from './inventory.js';
import Messages from './messages.js';

class Game {
    constructor() {
        this.inventory = new Inventory();
        this.messages = new Messages();
    }

    tick() {
    }

    askForMoney() {
        this.inventory.dollars += 1;
        this.messages.add('Someone gave you some money, that was pretty cool.');
    }

    buyHat() {
        this.inventory.dollars -= 10;
        this.inventory.hats += 1;
        this.messages.add('This hat is really nice, it feels like hot butter.');
    }
}

export default Game;
