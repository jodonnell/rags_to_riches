import styles from '../assets/styles/interactive.css';
import React from 'react';

class InteractiveComponent extends React.Component {
    constructor(props) {
        super(props);
        this.askForMoney = this.askForMoney.bind(this);
    }

    render() {
        return (<div>
                <div data-name="askForMoney" className={styles.button} onClick={this.askForMoney}>Ask for money</div>
                </div>);
    }

    askForMoney() {
        this.props.onAskForMoney();
    }
}

export default InteractiveComponent;
