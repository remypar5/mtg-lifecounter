import { StyleSheet } from 'react-native';

import { FONT_FAMILY, COLOR_FOREGROUND } from '../../utils/constants';

const styles = StyleSheet.create({
    buttonContainer: {
        width: '20%',
    },
    button: {
        fontSize: 32,
        fontFamily: FONT_FAMILY,
        width: '100%',
        height: '100%',
        color: COLOR_FOREGROUND,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

export default styles;
