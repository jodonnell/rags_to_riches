import Messages from '../../app/models/messages.js';
import Message from '../../app/models/message.js';

describe('Messages', function () {
    let messages;

    beforeEach(function() {
        messages = new Messages();
    });

    it('gets the most recent', function () {
        for (let i = 0; i < 50; i++) {
            messages.add(i);
        }

        const messagesExpect = [];
        for (let i = 40; i < 50; i++) {
            messagesExpect.push(new Message(i + 1, i));
        }

        expect(messages.mostRecent()).toEqual(messagesExpect);
    });
});
