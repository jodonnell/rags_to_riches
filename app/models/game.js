import Inventory from './inventory.js';
import Messages from './messages.js';
import Tracking from './tracking.js';

class Game {
    constructor() {
        this.inventory = new Inventory();
        this.messages = new Messages();
        Tracking.track('Page Load');
    }

    tick() {
    }

    askForMoney() {
        if (this.inventory.hats > 0) {
            this.inventory.dollars += 2;
            this.messages.add('Someone dropped a couple bucks in that sweet suede hat of yours.');
        }
        else {
            this.inventory.dollars += 1;
            this.messages.add('Someone gave you some money, that was pretty cool.');
        }
    }

    buyHat() {
        if (!this.canBuyHat()) {
            return;
        }

        this.inventory.dollars -= 10;
        this.inventory.hats += 1;
        this.messages.add('This hat is really nice, it feels like hot butter.');
    }

    canBuyHat() {
        return this.inventory.dollars > 9 && this.inventory.hats === 0;
    }
}

export default Game;
