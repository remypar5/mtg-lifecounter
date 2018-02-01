import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import NumberSpinner from '../../../components/NumberSpinner';
import bgiconSrc from '../bgicon.png';

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
