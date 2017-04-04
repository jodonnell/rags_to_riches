import GameComponent from '../app/game_component.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'


describe('GameComponent', function () {
    it('says you are begging for money', function () {
        let element = ReactTestUtils.renderIntoDocument(React.createElement(GameComponent));
        let renderedDOM = ReactDOM.findDOMNode(element);

        expect(renderedDOM.textContent).toContain('You are begging for money on the subway.');
    });
});
