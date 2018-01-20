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
        const { color, name } = this.props.player;
        const { gameOver, life } = this.state;
        const { tile, playerName, gameOver: gameOverStyle } = styles;

        return (
            <View style={ [tile, gameOver ? gameOverStyle : null] }>
                <NumberSpinner value={ life }
                    onChange={this.onLifeChange} />
                <Text style={ [playerName, { color }] }>{ name }</Text>
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
