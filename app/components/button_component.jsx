import styles from '../assets/styles/button.css';
import Tracking from '../models/tracking.js';
import PropTypes from 'prop-types';
import React from 'react';

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {active: true};
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        if (this.state.active) {
            return (<div data-name={this.props.name} className={styles.active} onClick={this.handleClick}>{this.props.text}</div>);
        }
        else {
            return (<div data-name={this.props.name} className={styles.inactive}><div style={this.animationStyle()} className={styles.animate}></div><div>{this.props.text}</div></div>);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timerId);
    }

    handleClick() {
        Tracking.track(this.props.text);
        this.props.handleClick();
        this.timerId = setTimeout(() => {this.resetCooldown();}, this.cooldown);
        this.setState({active: false});
    }

    resetCooldown() {
        this.setState({active: true});
    }

    animationStyle() {
        return {animationDuration: (this.cooldown / 1000) + 's'};
    }

    get cooldown() {
        return parseInt(this.props.cooldown);
    }
}

ButtonComponent.propTypes = {
    handleClick: PropTypes.func.isRequired,
    name: PropTypes.string,
    text: PropTypes.string.isRequired,
    cooldown: PropTypes.number.isRequired
};

export default ButtonComponent;
