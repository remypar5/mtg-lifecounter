import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { StylePropType } from '../../types';
import { flattenStyles } from '../../utils';

const { image } = styles;

const BackgroundImage = ({ source, style }) => {
    const imageStyle = flattenStyles(image, style);

    return <Image source={source} style={imageStyle} />;
};

BackgroundImage.propTypes = {
    source: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
    ]).isRequired,
    style: StylePropType,
};

BackgroundImage.defaultProps = {
    style: null,
};

export default BackgroundImage;
