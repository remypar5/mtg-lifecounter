import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import NumberSpinner from './NumberSpinner';
import { FONT_FAMILY, COLOR_FOREGROUND, COLOR_BACKGROUND, COLOR_MARKED } from '../utils/constants';

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
        borderColor: COLOR_BACKGROUND,
        borderWidth: 3,
        borderStyle: 'solid',
        width: '100%',
        height: '100%',
    },
    gameOver: {
        backgroundColor: COLOR_MARKED
    },
    playerName: {
        color: COLOR_FOREGROUND,
        fontSize: 24,
        alignSelf: 'center',
        paddingVertical: 5
    }
});
