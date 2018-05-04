import React from 'react';
import PropTypes from 'prop-types';
import { Linking, Text as NativeText } from 'react-native';

// import Text from '../Text';
import { StylePropType } from '../../types';
import { flattenStyles } from '../../utils';

import styles from './styles';

const { link } = styles;

const openURL = (url) => Linking.canOpenURL(url)
    .then((supported) => {
        if (supported) {
            return Linking.openURL(url);
        }
        return Promise.reject(url);
    });

const Link = ({ href, children, style }) => (
    <NativeText
        onPress={() => openURL(href)}
        style={flattenStyles(link, style)}
    >
        {children}
    </NativeText>
);

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    style: StylePropType,
};

Link.defaultProps = {
    style: null,
};

export default Link;
// export {
//     openURL,
// };
