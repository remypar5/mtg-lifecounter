import React from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';
import PropTypes from 'prop-types';

import NumberSpinner from '../../components/NumberSpinner';

export default class GameSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerAmount: 2,
            startingLifeTotal: 20
        };
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.label }>Number of players [1-6]</Text>
                <NumberSpinner
                    min={ 1 }
                    max={ 6 }
                    value={ this.state.playerAmount }
                    onChange={ (playerAmount) => this.setState({playerAmount}) } />

                <Text style={ styles.label }>Starting lifepoints [{this.state.startingLifeTotal}]</Text>
                <View style={ styles.buttonContainer }>
                    { [20, 30, 40].map((startingLifeTotal) => (
                        <Button
                            key={`buttonLifePoints${startingLifeTotal}`}
                            style={[ styles.button, this.state.startingLifeTotal === startingLifeTotal ? styles.selected : null ]}
                            title={`${startingLifeTotal}`}
                            onPress={() => this.setState({ startingLifeTotal })} />
                    )) }
                </View>

                <Button
                    style={ styles.button }
                    title="Start game"
                    onPress={ () => this.startRound() } />
            </View>
        );
    }

    startRound() {
        const { playerAmount, startingLifeTotal } = this.state;
        
        this.props.onStart(playerAmount, startingLifeTotal);
    }
}

GameSettings.propTypes = {
    onStart: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    label: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    buttonContainer: {
        height: '20%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: 'steelblue',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        alignSelf: 'baseline'
    },
    selected: {
        backgroundColor: 'red'
    },
});