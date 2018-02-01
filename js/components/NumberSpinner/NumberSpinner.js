import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';
import SpinnerButton from '../SpinnerButton';

export default class NumberSpinner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
        };

        this.update = this.update.bind(this);
    }

    setValue(value) {
        this.setState({
            value,
        });

        this.props.onChange(value);
    }

    update(points) {
        const { value } = this.state;
        const { min, max } = this.props;

        this.setValue(Math.min(max, Math.max(min, value + points)));
    }

    render() {
        const { step, stepLarge } = this.props;
        const { value } = this.state;
        const { container, button, value: valueStyle } = styles;

        return (
            <View style={container}>
                <SpinnerButton
                    style={button}
                    content="-"
                    onPress={() => this.update(-step)}
                    onHold={() => this.update(-stepLarge)}
                />
                <Text style={valueStyle}>{value}</Text>
                <SpinnerButton
                    style={button}
                    content="+"
                    onPress={() => this.update(+step)}
                    onHold={() => this.update(+stepLarge)}
                />
            </View>
        );
    }
}

NumberSpinner.propTypes = {
    value: PropTypes.number.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    stepLarge: PropTypes.number,
    onChange: PropTypes.func,
};

NumberSpinner.defaultProps = {
    step: 1,
    stepLarge: 10,
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    onChange: () => { },
};
