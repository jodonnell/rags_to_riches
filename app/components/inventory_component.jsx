import styles from '../assets/styles/inventory.css';
import PropTypes from 'prop-types';
import React from 'react';

class InventoryComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.inventory}>
              {this.props.inventory.things.map((thing, index) => this.thing(thing, index))}
            </div>
        );
    }

    thing(thing, index) {
        return <div key={index}>
            {thing}
        </div>;
    }

}

InventoryComponent.propTypes = {
    inventory: PropTypes.object.isRequired
};

export default InventoryComponent;
