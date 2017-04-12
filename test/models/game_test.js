import Game from '../../app/models/game.js';

describe('Game', function () {
    let game;

    beforeEach(function() {
        game = new Game();
    });

    it('you can buy a hat', function () {
        game.buyHat();
        expect(game.inventory.dollars).toBe(-10);
        expect(game.inventory.hats).toBe(1);
        expect(game.messages.last().message).toEqual('This hat is really nice, it feels like hot butter.');
    });

    it('you can ask for money', function () {
        game.askForMoney();
        expect(game.inventory.dollars).toBe(1);
        expect(game.messages.last().message).toEqual('Someone gave you some money, that was pretty cool.');
    });
});
