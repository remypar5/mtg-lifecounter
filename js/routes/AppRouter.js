import { createStackNavigator } from 'react-navigation';

import { GameSettingsContainer } from '../screens/Game/GameSettings';
import { GameRoundContainer } from '../screens/Game/GameRound';
import { AboutScreen } from '../screens/About';

const AppRouter = createStackNavigator({
    GameSettings: {
        screen: GameSettingsContainer,
    },
    GameRound: {
        screen: GameRoundContainer,
    },
    About: {
        screen: AboutScreen,
    },
}, {
    initialRouteName: 'GameSettings',
});

export default AppRouter;
