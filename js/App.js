import React from 'react';
import { StyleSheet, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import GameSettings from './screens/Game/GameSettings';
import GameRound from './screens/Game/GameRound';

const GameRouter = StackNavigator({
    GameSettings: {
        screen: GameSettings
    },
    GameRound: {
        screen: GameRound
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
