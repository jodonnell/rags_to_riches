import React from 'react';
import InventoryComponent from './inventory_component.jsx';
import NotificationsAreaComponent from './notifications_area_component.jsx';
import styles from '../assets/styles/game_component.css';

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
                <NotificationsAreaComponent />
              </div>
              <InventoryComponent ref={inventory => this.inventory = inventory} />
            </div>
        );
    }

}

export default GameComponent;
