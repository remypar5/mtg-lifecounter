import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableNativeFeedback } from 'react-native';

import styles from './styles';

const { icon } = styles;

const IconButton = ({ source, onPress }) => (
    <TouchableNativeFeedback onPress={(evt) => onPress(evt)}>
        <Image
            style={icon}
            source={source}
        />
    </TouchableNativeFeedback>
);

IconButton.propTypes = {
    source: PropTypes.shape({
        uri: PropTypes.string.isRequired,
    }).isRequired,
    onPress: PropTypes.func,
};

IconButton.defaultProps = {
    onPress: () => {},
};

export default IconButton;
