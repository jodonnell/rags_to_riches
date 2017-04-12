import Game from '../../app/models/game.js';

describe('Game', function () {
    let game;

    beforeEach(function() {
        game = new Game();
    });

    it('gets the most recent', function () {
        game.buyHat();
        expect(game.inventory.dollars).toBe(-10);
        expect(game.inventory.hats).toBe(1);
        expect(game.messages.last().message).toEqual('Someone gave you some money, that was pretty cool.');
    });
});
