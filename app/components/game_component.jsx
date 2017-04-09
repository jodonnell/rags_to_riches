import React from 'react';
import Game from '../models/game.js';
import InventoryComponent from './inventory_component.jsx';
import MessagesComponent from './messages_component.jsx';
import styles from '../assets/styles/game_component.css';

class GameComponent extends React.Component {
    constructor(props) {
        super(props);

        this.game = new Game();
        this.state = {messages: this.game.messages, inventory: this.game.inventory};

        this.askForMoney = this.askForMoney.bind(this);
    }

    tick() {
        this.game.tick();
        this.setState({messages: this.game.messages, inventory: this.game.inventory});
    }

    render() {
        return (
            <div className={styles.gameComponent}>
              <div className="askForMoney" onClick={this.askForMoney}>Ask for money</div>
              <div className={styles.messagesArea}>
                <MessagesComponent messages={this.state.messages}/>
              </div>
              <InventoryComponent inventory={this.state.inventory} />
            </div>
        );
    }

    askForMoney() {
        this.game.inventory.dollars += 1;
        this.setState({inventory: this.game.inventory});
    }
}

export default GameComponent;
