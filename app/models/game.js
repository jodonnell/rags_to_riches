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
}

export default Game;
