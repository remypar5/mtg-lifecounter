import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

export default class SpinnerButton extends React.Component {

    _preventOnPress = false;

    constructor(props) {
        super(props);

        this._onPress = this._onPress.bind(this);

        if (props.onHold) {
            this._onPressIn = this._onPressIn.bind(this);
            this._onPressOut = this._onPressOut.bind(this);
        }
    }

    render() {
        const { content } = this.props;
        const { button, buttonContainer } = styles;

        return (
            <TouchableWithoutFeedback
                onPress={this._onPress}
                onPressIn={this._onPressIn}
                onPressOut={this._onPressOut}>
                <View style={[ buttonContainer ]}>
                    <Text style={ button }>{ content }</Text>
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
        }, 650);
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

const styles = StyleSheet.create({
    buttonContainer: {
        width: '20%'
    },
    button: {
        width: '100%',
        height: '100%',
        color: '#b2b2b0',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});
