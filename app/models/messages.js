import _ from 'lodash';
import Message from './message.js';

class Messages {
    constructor() {
        this._messages = [];
        this.add('You are begging for money on the subway.');
    }

    add(messageString) {
        const message = new Message(this._messages.length, messageString);
        this._messages.push(message);
    }

    mostRecent() {
        return _.takeRight(this._messages, 10);
    }

    last() {
        return _.last(this._messages);
    }
}

export default Messages;
