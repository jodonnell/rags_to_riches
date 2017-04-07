import MessagesComponent from '../../app/components/messages_component.jsx';
import Messages from '../../app/models/messages.js';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'


describe('MessagesComponent', function () {
    let element, renderedDOM, messages;

    function create(message) {
        element = ReactTestUtils.renderIntoDocument(React.createElement(MessagesComponent, {messages: message}));
        renderedDOM = ReactDOM.findDOMNode(element);
    }

    beforeEach(function() {
        messages = new Messages();
        create(messages);
    });

    it('says you are begging for money', function () {
        expect(renderedDOM.textContent).toContain('You are begging for money on the subway.');
    });

    it('will add more messages to the screen', function () {
        messages = new Messages();
        messages.add('You are kind of happy.');
        create(messages);
        expect(renderedDOM.textContent).toContain('You are kind of happy.');
    });
});
