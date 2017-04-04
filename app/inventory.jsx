import React from 'react';

class Inventory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {dollars: 0};
    }

    render() {
        return (
            <div>
              {this.state.dollars} dollars
            </div>
        );
    }

    tick() {
        this.setState({dollars: this.state.dollars + 1});
    }

}

export default Inventory;