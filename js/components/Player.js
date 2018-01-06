import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import NumberSpinner from './NumberSpinner';

export default class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            life: props.player.life,
            gameOver: false
        };

        this.onLifeChange = this.onLifeChange.bind(this);
    }

    render() {
        const player = this.props.player;
        const life = this.state.life;

        return (
            <View style={ [styles.tile, this.state.gameOver ? styles.gameOver : null] }>
                <NumberSpinner value={ this.state.life }
                    onChange={this.onLifeChange} />
                <Text style={ [styles.playerName, { color: player.color }] }>{ player.name }</Text>
            </View>
        );
    }

    onLifeChange(life) {
        const gameOver = life <= 0;

        this.setState({
            gameOver
        });

        this.props.onGameOver(gameOver);
    }
};

Player.propTypes = {
    player: propTypes.object.isRequired,
    onGameOver: propTypes.func
}

Player.defaultProps = {
    onGameOver: () => {}
}

const styles = StyleSheet.create({
    tile: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderColor: '#262626',
        borderWidth: 3,
        borderStyle: 'solid',
        width: '100%',
        height: '100%',
    },
    gameOver: {
        backgroundColor: '#710000'
    },
    playerName: {
        color: '#b2b2b0',
        fontSize: 18,
        alignSelf: 'center',
        paddingVertical: 5
    }
});
