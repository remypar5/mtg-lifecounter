import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import NumberSpinner from '../../components/NumberSpinner';
import { FONT_FAMILY, COLOR_MARKED, COLOR_FOREGROUND, COLOR_BACKGROUND } from '../../utils/constants';
import bgiconSrc from './bgicon.png';

const { height: screenHeight } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#161616',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
    },
    bgicon: {
        width: '100%',
        height: screenHeight,
    },
    label: {
        color: COLOR_FOREGROUND,
        fontSize: 25,
        textAlign: 'left',
        width: '95%',
        alignSelf: 'center',
    },
    buttonContainer: {
        height: '20%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        flex: 1,
        height: 50,
        backgroundColor: COLOR_BACKGROUND,
        color: COLOR_FOREGROUND,
        fontFamily: FONT_FAMILY,
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'baseline',
    },
    startButton: {
        width: '100%',
        height: 40,
        fontSize: 36,
        borderColor: '#161616',
        borderWidth: 6,
    },
    selected: {
        backgroundColor: COLOR_MARKED,
    },
});

export default class GameSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfPlayers: 2,
            startingLifeTotal: GameSettings.lifePoints[0],
        };
    }

    startRound() {
        const { startingLifeTotal, numberOfPlayers } = this.state;

        this.props.navigation.navigate('GameRound', { startingLifeTotal, numberOfPlayers });
    }

    render() {
        const { numberOfPlayers, startingLifeTotal } = this.state;
        const {
            container, bgicon, label, buttonContainer, button, selected, startButton,
        } = styles;

        return (
            <View style={container}>
                <Image source={bgiconSrc} style={[StyleSheet.absoluteFill, bgicon]} />
                <Text style={label}>Players</Text>
                <NumberSpinner
                    min={1}
                    max={6}
                    stepLarge={1}
                    value={numberOfPlayers}
                    onChange={(nrPlayers) => this.setState({ numberOfPlayers: nrPlayers })}
                />

                <Text style={label}>Lifepoints</Text>
                <View style={buttonContainer}>
                    {GameSettings.lifePoints.map((points) => (
                        <Text
                            key={`buttonLifePoints${points}`}
                            style={[button, startingLifeTotal === points ? selected : null]}
                            onPress={() => this.setState({ startingLifeTotal: points })}
                        >
                            {points}
                        </Text>
                    ))}
                </View>

                <Text
                    style={[button, startButton]}
                    onPress={() => this.startRound()}
                >
                    Start game
                </Text>
            </View>
        );
    }
}

GameSettings.lifePoints = [20, 30, 40];
GameSettings.propTypes = {
    navigation: PropTypes.object.isRequired,
};
