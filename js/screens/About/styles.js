import { StyleSheet } from 'react-native';

import { normalizeFontSize } from '../../utils';
import { FONT_SIZE_TINY, FONT_SIZE_SMALL } from '../../utils/constants';

export default StyleSheet.create({
    container: {
        paddingHorizontal: normalizeFontSize(FONT_SIZE_TINY),
    },
    heading: {
        fontSize: normalizeFontSize(FONT_SIZE_SMALL),
        marginBottom: normalizeFontSize(FONT_SIZE_TINY),
    },
    paragraph: {
        fontSize: normalizeFontSize(FONT_SIZE_TINY),
        marginBottom: normalizeFontSize(FONT_SIZE_TINY),
    },
    link: {
        fontSize: normalizeFontSize(FONT_SIZE_TINY),
        textDecorationLine: 'underline',
        color: 'red',
    },
});
