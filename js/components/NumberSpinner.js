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
        const { step, stepLarge } = this.props;
        const { value } = this.state;
        const { container, button, value: valueStyle } = styles;

        return (
            <View style={ container }>
                <SpinnerButton
                    style={ button }
                    content="-"
                    onPress={() => this.decrease(step)}
                    onHold={() => this.decrease(stepLarge)} />
                <Text style={ valueStyle }>{ value }</Text>
                <SpinnerButton
                    style={ button }
                    content="+"
                    onPress={() => this.increase(step)}
                    onHold={() => this.increase(stepLarge)} />
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
        const { value } = this.state;
        const { max } = this.props;
        let newValue = value + points;

        if (max !== undefined) {
            newValue = Math.min(max, newValue);
        }

        this.setValue(newValue);
    }

    decrease(points) {
        const { value } = this.state;
        const { min } = this.props;
        let newValue = value - points;

        if (min !== undefined) {
            newValue = Math.max(min, newValue);
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
        height: '100%',
        color: '#b2b2b0',
    },
    value: {
        width: '40%',
        height: '100%',
        textAlignVertical: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#b2b2b0',
        fontSize: 40,
    }
});
