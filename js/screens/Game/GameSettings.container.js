import React from 'react';

import GameSettings from './GameSettings';

export default class GameSettingsContainer extends React.Component {

    render() {
        const { navigation } = this.props;

        return <GameSettings
            navigation={ navigation } />
    }

}
