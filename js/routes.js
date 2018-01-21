import { StackNavigator } from 'react-navigation';

import GameSettingsContainer from './screens/Game/GameSettings.container';
import GameRoundContainer from './screens/Game/GameRound.container';

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

export default GameRouter;
