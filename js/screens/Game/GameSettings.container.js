import React from 'react';
import { Image } from 'react-native';

import GameSettings from './GameSettings';

export default class GameSettingsContainer extends React.Component {

    static navigationOptions = {
        title: 'Game Settings',
        headerLeft: <Image
            style={{width: 48, height: 48}}
            source={{uri: 'asset:/ic_launcher.png'}} />
    };

    render() {
        const { navigation } = this.props;

        return <GameSettings
            navigation={ navigation } />
    }

}
