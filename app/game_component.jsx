import React from 'react';
import Inventory from './inventory.jsx';
import NotificationsArea from './notifications_area.jsx';
import styles from './assets/styles/game_component.css';

class GameComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    tick() {
        this.inventory.tick();
    }

    render() {
        return (
            <div className={styles.gameComponent}>
              <div className={styles.notificationsArea}>
                <NotificationsArea />
              </div>
              <Inventory ref={inventory => this.inventory = inventory} />
            </div>
        );
    }

}

export default GameComponent;
