import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';
import NumberSpinner from '../NumberSpinner';

export default class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            life: props.player.life,
            gameOver: false,
        };

        this.onLifeChange = this.onLifeChange.bind(this);
    }

    onLifeChange(life) {
        const gameOver = life <= 0;

        this.setState({
            gameOver,
        });

        this.props.onGameOver(gameOver);
    }

    render() {
        const { color, name } = this.props.player;
        const { gameOver, life } = this.state;
        const { tile, playerName, gameOver: gameOverStyle } = styles;

        return (
            <View style={[tile, gameOver ? gameOverStyle : null]}>
                <NumberSpinner
                    value={life}
                    onChange={this.onLifeChange}
                />
                <Text style={[playerName, { color }]}>{name}</Text>
            </View>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired,
    onGameOver: PropTypes.func,
};

Player.defaultProps = {
    onGameOver: () => {},
};
