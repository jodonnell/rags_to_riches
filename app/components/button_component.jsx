import styles from '../assets/styles/button.css';
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
            const animateStyles = {animationDuration: (this.cooldown / 1000) + 's'};
            return (<div data-name={this.props.name} className={styles.inactive}><div style={animateStyles} className={styles.animate}></div><div>{this.props.text}</div></div>);
        }
    }

    handleClick() {
        this.props.handleClick();
        setTimeout(() => {this.resetCooldown();}, this.cooldown);
        this.setState({active: false});
    }

    resetCooldown() {
        this.setState({active: true});
    }

    get cooldown() {
        return parseInt(this.props.cooldown);
    }
}

export default ButtonComponent;
