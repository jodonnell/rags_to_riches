import ButtonComponent from '../../app/components/button_component.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';


describe('ButtonComponent', function () {
    let element, renderedDOM, counter;

    function counterIncrement() {
        counter += 1;
    }

    beforeEach(function() {
        element = ReactTestUtils.renderIntoDocument(React.createElement(ButtonComponent, {cooldown: 1, handleClick: counterIncrement, text: '', name: ''}));
        renderedDOM = ReactDOM.findDOMNode(element);
        counter = 0;
    });

    it('waits for the cooldown to call the onclick', function () {
        ReactTestUtils.Simulate.click(renderedDOM);
        expect(counter).toBe(1);

        ReactTestUtils.Simulate.click(renderedDOM);
        expect(counter).toBe(1);
    });

    it('can click again after the cooldown', function (done) {
        ReactTestUtils.Simulate.click(renderedDOM);
        expect(counter).toBe(1);

        setTimeout(function() {
            ReactTestUtils.Simulate.click(renderedDOM);
            expect(counter).toBe(2);
            done();
        }, 2);
    });

});
