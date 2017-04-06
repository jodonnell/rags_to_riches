import styles from '../assets/styles/messages.css';
import React from 'react';

class MessagesComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    message(message, index) {
        return <div key={index}>
            {message}
        </div>;
    }

    render() {
        return (
            <div className={styles.messagesArea}>
              {this.props.messages._messages.map((message, index) => this.message(message, index))}
            </div>
        );
    }

}

export default MessagesComponent;
