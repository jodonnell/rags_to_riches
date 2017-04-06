import React from 'react';
import {render} from 'react-dom';
import GameComponent from './game_component.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.game.tick();
    }

    render () {
        return <GameComponent ref={game => this.game = game} />;
    }
}

render(<App/>, document.getElementById('app'));
