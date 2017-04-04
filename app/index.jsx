import React from 'react';
import {render} from 'react-dom';
import GameComponent from './game_component.jsx';


class App extends React.Component {
    render () {
        return <GameComponent />;
    }
}

render(<App/>, document.getElementById('app'));
