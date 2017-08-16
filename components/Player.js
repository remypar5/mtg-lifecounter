import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberSpinner from './NumberSpinner';

export default class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            life: props.player.life
        };
    }
    
    render() {
        const player = this.props.player;
        const life = this.state.life;
        
        return (
            <View style={ styles.tile }>
                <Text style={ styles.playerName }>{ player.name }</Text>
                <NumberSpinner value={ this.state.life } />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    tile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '100%',
    },
    playerName: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        elevation: 30,
    }
});