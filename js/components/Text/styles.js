import { StyleSheet } from 'react-native';

import { normalizeFontSize } from '../../utils';
import { COLOR_FOREGROUND, COLOR_BACKGROUND, FONT_SIZE_LARGE, FONT_SIZE, FONT_FAMILY, FONT_SIZE_SMALL, FONT_SIZE_HUGE } from '../../utils/constants';

const styles = StyleSheet.create({
    heading: {
        color: COLOR_FOREGROUND,
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: normalizeFontSize(FONT_SIZE_LARGE),
    },
    paragraph: {
        color: COLOR_FOREGROUND,
        textAlign: 'left',
        fontSize: normalizeFontSize(FONT_SIZE),
    },
    label: {
        color: COLOR_FOREGROUND,
        textAlign: 'left',
        paddingHorizontal: normalizeFontSize(5),
        paddingVertical: normalizeFontSize(2),
        fontSize: normalizeFontSize(FONT_SIZE_SMALL),
    },
    value: {
        color: COLOR_FOREGROUND,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: FONT_FAMILY,
        padding: normalizeFontSize(2),
        fontSize: normalizeFontSize(FONT_SIZE_HUGE),
    },
    button: {
        backgroundColor: COLOR_BACKGROUND,
        color: COLOR_FOREGROUND,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'baseline',
        fontSize: normalizeFontSize(FONT_SIZE),
    },
});

export default styles;
