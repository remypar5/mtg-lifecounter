import { StackNavigator } from 'react-navigation';

import { GameSettingsContainer } from '../screens/Game/GameSettings';
import { GameRoundContainer } from '../screens/Game/GameRound';

const AppRouter = StackNavigator({
    GameSettings: {
        screen: GameSettingsContainer,
    },
    GameRound: {
        screen: GameRoundContainer,
    },
}, {
    initialRouteName: 'GameSettings',
});

export default AppRouter;
