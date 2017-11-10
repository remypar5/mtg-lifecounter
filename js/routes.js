import { StackNavigator } from "react-navigation";

import Game from './screens/Game';
import GameSettings from './screens/Game/GameSettings';
import GameRound from './screens/Game/GameRound';

export const AppRouter = StackNavigator({
    Game: {
        screen: Game
    }
}, {
    initialRouteName: 'Game'
});

export const GameRouter = StackNavigator({
    GameSettings: {
        screen: GameSettings
    },
    GameRound: {
        screen: GameRound
    }
}, {
    initialRouteName: 'GameSettings'
});
