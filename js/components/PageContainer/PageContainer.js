import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';
import { StylePropType } from '../../types';
import { flattenStyles } from '../../utils';

const PageContainer = ({ style, children }) => {
    const containerStyles = flattenStyles(styles.container, style);

    return (
        <View style={containerStyles}>
            {children}
        </View>
    );
};

PageContainer.propTypes = {
    children: PropTypes.node.isRequired,
    style: StylePropType,
};

PageContainer.defaultProps = {
    style: null,
};

export default PageContainer;
