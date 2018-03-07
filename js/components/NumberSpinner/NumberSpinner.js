import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';
import SpinnerButton from '../SpinnerButton';
import Text from '../Text';

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
        const { step, stepLarge, size } = this.props;
        const { value } = this.state;
        const { container, valueLarge, valueNormal } = styles;
        const valueStyle = size === 'large' ? valueLarge : valueNormal;

        return (
            <View style={container}>
                <SpinnerButton
                    content="-"
                    onPress={() => this.update(-step)}
                    onHold={() => this.update(-stepLarge)}
                />
                <Text
                    type="value"
                    style={valueStyle}
                >
                    {value}
                </Text>
                <SpinnerButton
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
    size: PropTypes.oneOf(['small', 'large']),
    onChange: PropTypes.func,
};

NumberSpinner.defaultProps = {
    step: 1,
    stepLarge: 10,
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    size: 'small',
    onChange: () => { },
};
