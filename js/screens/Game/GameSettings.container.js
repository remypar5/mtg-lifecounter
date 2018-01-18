import React from 'react';
import { StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';

import GameSettings from './GameSettings';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#101011',
    },
    headerTitle: {
        color: '#b2b2b0',
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
            // <ImageBackground source={{uri: 'drawable/ic_bgicon' }} style={{ width: 100 }}>
            // </ImageBackground>
        );
    }

}
