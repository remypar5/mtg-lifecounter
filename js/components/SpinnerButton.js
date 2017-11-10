import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

export default class SpinnerButton extends React.Component {

    _preventOnPress = false;

    constructor(props) {
        super(props);

        this._onPress = this._onPress.bind(this);
        this._onPressIn = this._onPressIn.bind(this);
        this._onPressOut = this._onPressOut.bind(this);
    }

    render() {
        const props = this.props;

        return (
            <TouchableWithoutFeedback style={styles.hitbox}
                onPress={this._onPress} onPressIn={this._onPressIn} onPressOut={this._onPressOut}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.button}>{props.content}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    _onPress(event) {
        if (this._preventOnPress) {
            return;
        }
        this.props.onPress(event);
        this._preventOnPress = false;
    }

    _onPressIn() {
        this._onHoldInterval = setInterval(() => {
            this._preventOnPress = true;
            this.props.onHold();
        }, 900);
    }

    _onPressOut() {
        clearInterval(this._onHoldInterval);
        setTimeout(() => {
            this._preventOnPress = false
        }, 100);
    }
}

SpinnerButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    onHold: PropTypes.func
};

SpinnerButton.defaultProps = {
    onHold: () => { }
};

const styles = StyleSheet.create({
    hitbox: {
    },
    buttonContainer: {
        width: '35%',
    },
    button: {
        fontSize: 20,
        height: '100%',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});