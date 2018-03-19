import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { NumberSpinner, Text, PageContainer, BackgroundImage } from '../../../components';
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
            container, buttonContainer, button, selected, startButtonContainer, startButton,
        } = styles;

        return (
            <PageContainer style={container}>
                <BackgroundImage source={bgiconSrc} />
                <Text type="label">Players</Text>
                <NumberSpinner
                    min={1}
                    max={6}
                    size="large"
                    stepLarge={1}
                    value={numberOfPlayers}
                    onChange={(nrPlayers) => this.setState({ numberOfPlayers: nrPlayers })}
                />

                <Text type="label">Lifepoints</Text>
                <View style={buttonContainer}>
                    {GameSettings.lifePoints.map((points) => (
                        <Text
                            type="button"
                            key={`buttonLifePoints${points}`}
                            style={[button, startingLifeTotal === points ? selected : 0]}
                            onPress={() => this.setState({ startingLifeTotal: points })}
                        >
                            {points}
                        </Text>
                    ))}
                </View>

                <View style={startButtonContainer}>
                    <Text
                        type="button"
                        style={startButton}
                        onPress={() => this.startRound()}
                    >
                        Start
                    </Text>
                </View>
            </PageContainer>
        );
    }
}

GameSettings.lifePoints = [20, 30, 40];
GameSettings.propTypes = {
    navigation: PropTypes.object.isRequired,
};
