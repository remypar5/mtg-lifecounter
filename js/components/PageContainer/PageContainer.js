import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const PageContainer = ({ style, children }) => {
    const containerStyles = [
        styles.container,
    ];

    if (style) {
        containerStyles.push(style);
    }

    return (
        <View style={containerStyles}>
            {children}
        </View>
    );
};

PageContainer.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.arrayOf([
            PropTypes.object,
            PropTypes.number,
        ]),
    ]),
};

PageContainer.defaultProps = {
    style: null,
};

export default PageContainer;
