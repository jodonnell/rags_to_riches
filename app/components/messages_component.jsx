import styles from '../assets/styles/messages.css';
import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MessagesComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    message(message) {
        return <div className={styles.message} key={message.id}>
            {message.message}
        </div>;
    }

    render() {
        return (
            <div className={styles.messagesArea}>
              <ReactCSSTransitionGroup
                 transitionName={ {
                     enter: styles.animationEnter,
                     enterActive: styles.animationEnterActive,
                     leave: styles.animationLeave,
                     leaveActive: styles.animationLeaveActive
                 } }
                 transitionEnterTimeout={500}
                 transitionLeaveTimeout={300}>
                {this.props.messages.mostRecent().map((message) => this.message(message))}
              </ReactCSSTransitionGroup>
            </div>
        );
    }

}

MessagesComponent.propTypes = {
    messages: PropTypes.object.isRequired
};

export default MessagesComponent;
