import Messages from '../../app/models/messages.js';

describe('Messages', function () {
    let messages;

    beforeEach(function() {
        messages = new Messages();
    });

    it('gets the most recent', function () {
        for (let i = 0; i < 50; i++) {
            messages.add(i);
        }

        expect(messages.mostRecent()).toEqual([40, 41, 42, 43, 44, 45, 46, 47, 48, 49]);
    });
});
