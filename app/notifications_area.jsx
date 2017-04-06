import styles from './assets/styles/notifications_area.css';
import React from 'react';

class NotificationsArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {messages: ['You are begging for money on the subway.']};
    }

    add(notification) {
        this.setState({messages: this.state.messages.concat([notification])});
    }

    message(message, index) {
        return <div key={index}>
            {message}
        </div>;
    }

    render() {
        return (
            <div className={styles.notificationsArea}>
              {this.state.messages.map((message, index) => this.message(message, index))}
            </div>
        );
    }

}

export default NotificationsArea;
