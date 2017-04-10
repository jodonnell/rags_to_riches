import styles from '../assets/styles/interactive.css';
import React from 'react';

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.active = false;
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (<div data-name={this.props.name} className={styles.button} onClick={this.handleClick}>{this.props.text}</div>);
    }

    handleClick() {
        if (this.active) {
            return;
        }

        this.props.handleClick();
        setTimeout(() => {this.active = false;}, parseInt(this.props.cooldown));
        this.active = true;
    }
}

export default ButtonComponent;
