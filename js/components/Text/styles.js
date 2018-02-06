import { StyleSheet } from 'react-native';

import { normalizeFontSize } from '../../utils';
import { COLOR_FOREGROUND, COLOR_BACKGROUND } from '../../utils/constants';

const styles = StyleSheet.create({
    heading: {
        color: COLOR_FOREGROUND,
        fontSize: normalizeFontSize(24),
        fontWeight: 'bold',
        textAlign: 'left',
    },
    paragraph: {
        color: COLOR_FOREGROUND,
        fontSize: normalizeFontSize(18),
        textAlign: 'left',
    },
    label: {
        color: COLOR_FOREGROUND,
        fontSize: normalizeFontSize(16),
        textAlign: 'left',
    },
    value: {
    },
    button: {
        backgroundColor: COLOR_BACKGROUND,
        color: COLOR_FOREGROUND,
        fontSize: normalizeFontSize(16),
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'baseline',
    },
});

export default styles;
