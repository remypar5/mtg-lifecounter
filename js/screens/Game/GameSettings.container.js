import React from 'react';
import { StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';

import GameSettings from './GameSettings';
import { COLOR_FOREGROUND } from '../../utils/constants';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#101011',
    },
    headerTitle: {
        color: COLOR_FOREGROUND,
    }
});

export default class GameSettingsContainer extends React.Component {

    static navigationOptions = {
        title: 'Lifecounter',
        headerLeft: <Image
            style={{width: 42, height: 42}}
            source={{ uri: 'mipmap/ic_launcher' }} />,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
    };

    render() {
        const { navigation } = this.props;

        return (
            <GameSettings navigation={ navigation } />
        );
    }

}
