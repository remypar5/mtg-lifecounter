import React from 'react';
import { Text as NativeText } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { StylePropType } from '../../types';
import { flattenStyles } from '../../utils';

const Text = (props) => {
    const { type, style, children } = props;
    const textStyles = flattenStyles(styles[type], style);

    return (<NativeText {...props} style={textStyles}>{children}</NativeText>);
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf([
        'heading',
        'paragraph',
        'label',
        'value',
        'button',
    ]),
    style: StylePropType,
};

Text.defaultProps = {
    type: 'paragraph',
    style: null,
};

export default Text;
