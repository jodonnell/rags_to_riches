import styles from '../assets/styles/messages.css';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MessagesComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    message(message, index) {
        return <div key={message.id}>
            {message.message}
        </div>;
    }

    render() {
        return (
            <div className={styles.messagesArea}>
              <ReactCSSTransitionGroup
                 transitionName="example"
                 transitionEnterTimeout={500}
                 transitionLeaveTimeout={300}>
                {this.props.messages.mostRecent().map((message, index) => this.message(message, index))}
              </ReactCSSTransitionGroup>
            </div>
        );
    }

}

export default MessagesComponent;
