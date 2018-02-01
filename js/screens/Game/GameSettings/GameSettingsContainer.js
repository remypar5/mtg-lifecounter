import React from 'react';
import { StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

import GameSettings from './GameSettings';
import { COLOR_FOREGROUND } from '../../../utils/constants';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#101011',
    },
    headerTitle: {
        color: COLOR_FOREGROUND,
    },
});

// Ignore the next line because react-router requires containers to be actual React Components
// eslint-disable-next-line react/prefer-stateless-function
export default class GameSettingsContainer extends React.Component {
    render() {
        const { navigation } = this.props;

        return (<GameSettings navigation={navigation} />);
    }
}

GameSettingsContainer.navigationOptions = {
    title: 'Lifecounter',
    headerLeft: <Image
        style={{ width: 42, height: 42 }}
        source={{ uri: 'mipmap/ic_launcher' }}
    />,
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
};

GameSettingsContainer.propTypes = {
    navigation: PropTypes.object.isRequired,
};
