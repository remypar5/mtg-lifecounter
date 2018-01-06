import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import SpinnerButton from './SpinnerButton';

export default class NumberSpinner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    render() {
        const props = this.props;

        return (
            <View style={styles.container}>
                <SpinnerButton
                    style={ styles.button }
                    width="20%"
                    content="-"
                    onPress={() => this.decrease(props.step)}
                    onHold={() => this.decrease(props.stepLarge)} />
                <Text style={styles.value}>{this.state.value}</Text>
                <SpinnerButton
                    width="20%"
                    style={ styles.button }
                    content="+"
                    onPress={() => this.increase(props.step)}
                    onHold={() => this.increase(props.stepLarge)} />
            </View>
        );
    }

    setValue(value) {
        this.setState({
            value
        });

        this.props.onChange(value);
    }

    increase(points) {
        let newValue = this.state.value + points;

        if (this.props.max !== undefined) {
            newValue = Math.min(this.props.max, newValue);
        }

        this.setValue(newValue);
    }

    decrease(points) {
        let newValue = this.state.value - points;

        if (this.props.min !== undefined) {
            newValue = Math.max(this.props.min, newValue);
        }

        this.setValue(newValue);
    }

}

NumberSpinner.propTypes = {
    value: PropTypes.number.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    stepLarge: PropTypes.number,
    onChange: PropTypes.func
};

NumberSpinner.defaultProps = {
    step: 1,
    stepLarge: 10,
    onChange: () => { }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', // Horizontal
        alignItems: 'center', // Vertical
    },
    button: {
        // flexGrow: 3,
        // width: '20%',
        height: '100%',
        color: '#b2b2b0',
    },
    value: {
        // backgroundColor: 'red',
        width: '40%',
        height: '100%',
        textAlignVertical: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#b2b2b0',
        fontSize: 40,
    }
});
