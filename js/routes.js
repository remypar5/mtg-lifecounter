import { StackNavigator, TabNavigator } from 'react-navigation';

import GameSettingsContainer from './screens/Game/GameSettings.container';
import GameRoundContainer from './screens/Game/GameRound.container';
import AboutContainer from './screens/About/About.container';
import { COLOR_MARKED, COLOR_BACKGROUND, COLOR_FOREGROUND } from './utils/constants';

const GameRouter = StackNavigator({
    GameSettings: {
        screen: GameSettingsContainer,
    },
    GameRound: {
        screen: GameRoundContainer,
    },
}, {
    initialRouteName: 'GameSettings',
});

const AppRouter = TabNavigator({
    Game: {
        screen: GameRouter,
    },
    About: {
        screen: AboutContainer,
    },
}, {
    initialRouteName: 'Game',
    tabBarPosition: 'top',
    tabBarOptions: {
        activeBackgroundColor: COLOR_MARKED,
        activeTintColor: COLOR_FOREGROUND,
        inactiveBackgroundColor: COLOR_BACKGROUND,
        inactiveTintColor: COLOR_FOREGROUND,
    },
});

export default AppRouter;
