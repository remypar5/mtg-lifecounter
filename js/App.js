import React from 'react';
import { StyleSheet, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import GameSettingsContainer from './screens/Game/GameSettings.container';
import GameRoundContainer from './screens/Game/GameRound.container';

const GameRouter = StackNavigator({
    GameSettings: {
        screen: GameSettingsContainer
    },
    GameRound: {
        screen: GameRoundContainer
    }
}, {
    initialRouteName: 'GameSettings'
});

export default class App extends React.Component {
    render() {
        return (
            <GameRouter />
        );
    }
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: '#161616',
    }
});
