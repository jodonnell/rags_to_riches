import styles from '../assets/styles/interactive.css';
import ButtonComponent from './button_component.jsx';
import React from 'react';

class InteractiveComponent extends React.Component {
    constructor(props) {
        super(props);
        this.askForMoney = this.askForMoney.bind(this);
        this.buyHat = this.buyHat.bind(this);
    }

    render() {
        return (<div>
                {this.askForMoneyButton()}
                {this.buyHatButton()}
                </div>);
    }

    askForMoneyButton() {
        return (<ButtonComponent name="askForMoney" handleClick={this.askForMoney} text="Ask for money" cooldown="1500" />);
    }

    buyHatButton() {
        if (this.props.game.inventory.dollars > 9) {
            return (<ButtonComponent name="buyHat" handleClick={this.buyHat} text="Buy a very cool hat" cooldown="1500" />);
        }
        return;
    }

    askForMoney() {
        this.props.onAskForMoney();
    }

    buyHat() {
        this.props.onBuyHat();
    }
}

export default InteractiveComponent;
