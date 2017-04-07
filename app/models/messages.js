import _ from 'lodash';

class Messages {
    constructor() {
        this._messages = ['You are begging for money on the subway.'];
    }

    add(message) {
        this._messages.push(message);
    }

    mostRecent() {
        return _.takeRight(this._messages, 10);
    }
}

export default Messages;
