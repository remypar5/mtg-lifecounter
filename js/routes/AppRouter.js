import { StackNavigator } from 'react-navigation';

import { GameSettingsContainer } from '../screens/Game/GameSettings';
import { GameRoundContainer } from '../screens/Game/GameRound';
import { AboutScreen } from '../screens/About';

const AppRouter = StackNavigator({
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
