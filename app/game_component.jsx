import React from 'react';
import Inventory from './inventory.jsx';

class GameComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    tick() {
        this.inventory.tick();
    }

    render() {
        return (
            <div>
              You are begging for money on the subway.
              <Inventory ref={inventory => this.inventory = inventory} />
            </div>
        );
    }

}

export default GameComponent;
