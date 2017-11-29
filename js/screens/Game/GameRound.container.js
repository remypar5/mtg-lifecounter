import React from 'react';

import GameRound from './GameRound';

export default class GameRoundContainer extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigation } = this.props;
        const { numberOfPlayers, startingLifeTotal } = navigation.state.params;

        return <GameRound
            navigation={ navigation }
            numberOfPlayers={ numberOfPlayers }
            startingLifeTotal={ startingLifeTotal }
            />
    }

}
