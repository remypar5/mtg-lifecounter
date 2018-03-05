import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';
import NumberSpinner from '../NumberSpinner';
import Text from '../Text';

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
        const {
            tile, playerName, playerNameSmall, playerNameLarge, gameOver: gameOverStyle,
        } = styles;
        const { size } = this.props;
        const playerNameSizeStyle = size === 'small' ? playerNameSmall : playerNameLarge;

        return (
            <View style={[tile, gameOver ? gameOverStyle : null]}>
                <NumberSpinner
                    value={life}
                    step={1}
                    stepLarge={10}
                    size={size}
                    onChange={this.onLifeChange}
                />
                <Text
                    type="label"
                    style={[playerName, playerNameSizeStyle, { color }]}
                >
                    {name}
                </Text>
            </View>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired,
    size: PropTypes.oneOf(['small', 'large']).isRequired,
    onGameOver: PropTypes.func,
};

Player.defaultProps = {
    onGameOver: () => {},
};
