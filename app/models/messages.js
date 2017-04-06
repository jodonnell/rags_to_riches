class Messages {
    constructor() {
        this._messages = ['You are begging for money on the subway.'];
    }

    add(message) {
        this._messages.push(message);
    }
}

export default Messages;
