import GameComponent from '../../app/components/game_component.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'


describe('GameComponent', function () {
    let element, renderedDOM;

    beforeEach(function() {
        element = ReactTestUtils.renderIntoDocument(React.createElement(GameComponent));
        renderedDOM = ReactDOM.findDOMNode(element);
    });

    it('says you are begging for money', function () {
        expect(renderedDOM.textContent).toContain('You are begging for money on the subway.');
    });

    it('shows your money', function () {
        expect(renderedDOM.textContent).toContain('0 dollars');
    });

    it('will let your money grow', function () {
        element.tick();
        expect(renderedDOM.textContent).toContain('1 dollars');
    });

});
