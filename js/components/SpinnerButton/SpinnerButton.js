import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Text, View } from 'react-native';

import styles from './styles';

export default class SpinnerButton extends React.Component {
    constructor(props) {
        super(props);

        this.preventOnPress = false;
        this.onPress = this.onPress.bind(this);

        if (props.onHold) {
            this.onPressIn = this.onPressIn.bind(this);
            this.onPressOut = this.onPressOut.bind(this);
        }
    }

    onPress(event) {
        if (this.preventOnPress) {
            return;
        }
        this.props.onPress(event);
        this.preventOnPress = false;
    }

    onPressIn() {
        this.onHoldInterval = setInterval(() => {
            this.preventOnPress = true;
            this.props.onHold();
        }, 650);
    }

    onPressOut() {
        clearInterval(this.onHoldInterval);
        setTimeout(() => {
            this.preventOnPress = false;
        }, 100);
    }

    render() {
        const { content } = this.props;
        const { button, buttonContainer } = styles;
        const hitSlop = {
            top: 100,
            bottom: 100,
            left: 100,
            right: 100,
        };

        return (
            <TouchableWithoutFeedback
                hitSlop={hitSlop}
                onPress={this.onPress}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
            >
                <View style={[buttonContainer]}>
                    <Text style={button}>{content}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

SpinnerButton.propTypes = {
    content: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    onHold: PropTypes.func,
};

SpinnerButton.defaultProps = {
    onHold: null,
};
