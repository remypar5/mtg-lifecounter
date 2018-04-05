import React from 'react';
import PropTypes from 'prop-types';

import GameRound from './GameRound';

// Ignore the next line because react-router requires containers to be actual React Components
// eslint-disable-next-line react/prefer-stateless-function
export default class GameRoundContainer extends React.Component {
    render() {
        const { navigation } = this.props;
        const { numberOfPlayers, startingLifeTotal, stayAwake } = navigation.state.params;

        return (<GameRound
            navigation={navigation}
            numberOfPlayers={numberOfPlayers}
            startingLifeTotal={startingLifeTotal}
            stayAwake={stayAwake}
        />);
    }
}

GameRoundContainer.navigationOptions = {
    header: null,
};

GameRoundContainer.propTypes = {
    navigation: PropTypes.object.isRequired,
};
