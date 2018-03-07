import React from 'react';
import { Text as NativeText } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Text = (props) => {
    const { type, style, children } = props;
    return (<NativeText {...props} style={[styles[type], style]}>{children}</NativeText>);
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
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.number,
        ])),
    ]),
};

Text.defaultProps = {
    type: 'paragraph',
    style: null,
};

export default Text;
