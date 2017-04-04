import GameComponent from '../app/game_component.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'


describe('GameComponent', function () {
    let renderedDOM;

    beforeEach(function() {
        let element = ReactTestUtils.renderIntoDocument(React.createElement(GameComponent));
        renderedDOM = ReactDOM.findDOMNode(element);
    });

    it('says you are begging for money', function () {
        expect(renderedDOM.textContent).toContain('You are begging for money on the subway.');
    });

    it('shows your money', function () {
        expect(renderedDOM.textContent).toContain('0 dollars');
    });

});
