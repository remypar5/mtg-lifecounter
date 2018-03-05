import { StyleSheet } from 'react-native';
import { normalizeFontSize } from '../../utils';
import { FONT_SIZE_HUGE, FONT_SIZE } from '../../utils/constants';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start', // Horizontal
        alignItems: 'center', // Vertical
    },
    valueNormal: {
        flex: 2,
        fontSize: normalizeFontSize(FONT_SIZE),
    },
    valueLarge: {
        flex: 3,
        fontSize: normalizeFontSize(FONT_SIZE_HUGE),
    },
});

export default styles;
