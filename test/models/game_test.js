import Game from '../../app/models/game.js';
import Tracking from '../../app/models/tracking.js';

describe('Game', function () {
    let game;

    beforeEach(function() {
        game = new Game();
    });

    it('you can buy a hat', function () {
        game.inventory.dollars = 10;
        game.buyHat();
        expect(game.inventory.dollars).toBe(0);
        expect(game.inventory.hats).toBe(1);
        expect(game.messages.last().message).toEqual('This hat is really nice, it feels like hot butter.');
    });

    it('only lets you buy one hat', function () {
        game.inventory.dollars = 20;
        game.buyHat();
        game.buyHat();
        expect(game.inventory.dollars).toBe(10);
        expect(game.inventory.hats).toBe(1);
    });

    it('you can ask for money', function () {
        game.askForMoney();
        expect(game.inventory.dollars).toBe(1);
        expect(game.messages.last().message).toEqual('Someone gave you some money, that was pretty cool.');
    });

    it('tracks when you create a new game', function () {
        spyOn(Tracking, 'track');
        new Game();
        expect(Tracking.track).toHaveBeenCalledWith('Page Load');
    });

    it('it will give you 2 dollars when you ask for money and have a hat', function () {
        game.inventory.dollars = 10;
        game.buyHat();
        game.askForMoney();
        expect(game.inventory.dollars).toBe(2);
        expect(game.messages.last().message).toEqual('Someone dropped a couple bucks in that sweet suede hat of yours.');
    });

});
