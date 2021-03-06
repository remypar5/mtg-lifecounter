import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import HeaderButtons from 'react-navigation-header-buttons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import GameSettings from './GameSettings';
import { IconButton } from '../../../components';
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

GameSettingsContainer.navigationOptions = ({ navigation }) => ({
    title: 'Lifecounter',
    headerLeft: (
        <IconButton
            source={{ uri: 'mipmap/ic_launcher' }}
        />
    ),
    headerRight: (
        <HeaderButtons IconComponent={FeatherIcon} iconSize={23} color={`${COLOR_FOREGROUND}`}>
            <HeaderButtons.Item
                title="About"
                iconName="info"
                onPress={() => navigation.navigate('About')}
            />
        </HeaderButtons>
    ),
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
});

GameSettingsContainer.propTypes = {
    navigation: PropTypes.object.isRequired,
};
