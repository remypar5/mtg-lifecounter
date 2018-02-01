import { StyleSheet } from 'react-native';

import { FONT_FAMILY, COLOR_FOREGROUND } from '../../utils/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', // Horizontal
        alignItems: 'center', // Vertical
    },
    button: {
        height: '100%',
        color: COLOR_FOREGROUND,
        fontSize: 32,
        fontFamily: FONT_FAMILY,
    },
    value: {
        width: '40%',
        height: '100%',
        textAlignVertical: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        color: COLOR_FOREGROUND,
        fontSize: 42,
        fontFamily: FONT_FAMILY,
    },
});

export default styles;
