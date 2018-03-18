import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const { image } = styles;

const BackgroundImage = ({ source, style }) => {
    const imageStyle = [image];

    if (style) {
        imageStyle.push(style);
    }

    return <Image source={source} style={imageStyle} />;
};

BackgroundImage.propTypes = {
    source: PropTypes.object.isRequired,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.arrayOf([
            PropTypes.object,
            PropTypes.number,
        ]),
    ]),
};

BackgroundImage.defaultProps = {
    style: null,
};

export default BackgroundImage;
