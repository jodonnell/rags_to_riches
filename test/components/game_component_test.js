import GameComponent from '../../app/components/game_component.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

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
        expect(renderedDOM.textContent).toContain('0 dollars');
    });

    it('makes a button to ask for money', function () {
        element.tick();
        const button = renderedDOM.querySelector('[data-name="askForMoney"]');
        ReactTestUtils.Simulate.click(button);

        expect(renderedDOM.textContent).toContain('1 dollars');
    });

    it('lets you buy a hat when you have 10 dollars', function () {
        element.game.inventory.dollars = 10;
        element.tick();

        const button = renderedDOM.querySelector('[data-name="buyHat"]');
        ReactTestUtils.Simulate.click(button);

        expect(renderedDOM.textContent).toContain('1 very cool hat');
        expect(element.game.inventory.dollars).toBe(0);
    });

});
