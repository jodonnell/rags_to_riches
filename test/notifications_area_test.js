import NotificationsArea from '../app/notifications_area.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'


describe('NotificationsArea', function () {
    let element, renderedDOM;

    beforeEach(function() {
        element = ReactTestUtils.renderIntoDocument(React.createElement(NotificationsArea));
        renderedDOM = ReactDOM.findDOMNode(element);
    });

    it('says you are begging for money', function () {
        expect(renderedDOM.textContent).toContain('You are begging for money on the subway.');
    });

    it('will add more messages to the screen', function () {
        element.add('You are kind of happy.');
        expect(renderedDOM.textContent).toContain('You are kind of happy.');
    });

});
