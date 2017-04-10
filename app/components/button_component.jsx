import styles from '../assets/styles/interactive.css';
import React from 'react';

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (<div data-name={this.props.name} className={styles.button} onClick={this.handleClick}>{this.props.text}</div>);
    }

    handleClick() {
        this.props.handleClick();
    }
}

export default ButtonComponent;
