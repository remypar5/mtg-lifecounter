import React from 'react';
import { StyleSheet, Text, Button, View, Alert, Image } from 'react-native';
import PropTypes from 'prop-types';

import NumberSpinner from '../../components/NumberSpinner';

export default class GameSettings extends React.Component {

    static lifePoints = [20, 30, 40];

    constructor(props) {
        super(props);

        this.state = {
            numberOfPlayers: 2,
            startingLifeTotal: GameSettings.lifePoints[0]
            // numberOfPlayers: 6,
            // startingLifeTotal: 200
        };
    }

    render() {
        const state = this.state;

        return (
            <View style={ styles.container }>
                <Text style={ styles.label }>Players</Text>
                <NumberSpinner
                    min={ 1 }
                    max={ 6 }
                    value={ state.numberOfPlayers }
                    onChange={ (numberOfPlayers) => this.setState({numberOfPlayers}) } />

                <Text style={ styles.label }>Lifepoints</Text>
                <View style={ styles.buttonContainer }>
                    { GameSettings.lifePoints.map((startingLifeTotal) => (
                        <Text
                            key={`buttonLifePoints${startingLifeTotal}`}
                            style={[ styles.button, state.startingLifeTotal === startingLifeTotal ? styles.selected : null ]}
                            onPress={() => this.setState({ startingLifeTotal })}>
                            {startingLifeTotal}
                        </Text>
                    )) }
                </View>

                <Text
                    style={ [styles.button, styles.startButton] }
                    onPress={ () => this.startRound() }>
                    Start game
                </Text>
            </View>
        );
    }

    startRound() {
        const { startingLifeTotal, numberOfPlayers } = this.state;

        this.props.navigation.navigate('GameRound', { startingLifeTotal, numberOfPlayers });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#161616',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
    },
    label: {
        color: '#b2b2b0',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'left',
        width: '95%',
        alignSelf: 'center'
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
        backgroundColor: '#262626',
        color: '#b2b2b0',
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'baseline'
    },
    startButton: {
        width: '100%',
        height: 50,
        fontSize: 28,
        borderColor: '#161616',
        borderWidth: 6,
    },
    selected: {
        backgroundColor: '#710000'
    },
});
