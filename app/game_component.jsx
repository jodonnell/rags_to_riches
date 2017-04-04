import React from 'react';
import Inventory from './inventory.jsx';

class GameComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              You are begging for money on the subway.
              <Inventory />
            </div>
        );
    }

}

export default GameComponent;
