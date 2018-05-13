import React from 'react';
import { StyleSheet } from 'react-native';
import HeaderButtons from 'react-navigation-header-buttons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import About from './About';
import { COLOR_FOREGROUND } from '../../utils/constants';

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
        return (
            <About />
        );
    }
}

GameSettingsContainer.navigationOptions = ({ navigation }) => ({
    title: 'Info',
    headerTitle: 'Info',
    headerLeft: (
        <HeaderButtons IconComponent={FeatherIcon} iconSize={28} color={COLOR_FOREGROUND}>
            <HeaderButtons.Item
                title="Back"
                iconName="arrow-left"
                onPress={() => navigation.goBack()}
            />
        </HeaderButtons>
    ),
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
});
