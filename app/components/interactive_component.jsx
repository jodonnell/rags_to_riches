import styles from '../assets/styles/interactive.css';
import ButtonComponent from './button_component.jsx';
import React from 'react';

class InteractiveComponent extends React.Component {
    constructor(props) {
        super(props);
        this.askForMoney = this.askForMoney.bind(this);
    }

    render() {
        return (<div>
                <ButtonComponent name="askForMoney" handleClick={this.askForMoney} text="Ask for money" cooldown="1500" />
                </div>);
    }

    askForMoney() {
        this.props.onAskForMoney();
    }
}

export default InteractiveComponent;
