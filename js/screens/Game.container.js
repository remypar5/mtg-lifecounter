import React from 'react';

import Game from './Game';

export default class GameContainer extends React.Component {

    render() {
        const {params} = this.props.navigation.state;

        return <Game {...params} />
    }
}
