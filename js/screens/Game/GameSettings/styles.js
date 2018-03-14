import { StyleSheet, Dimensions } from 'react-native';

import { COLOR_MARKED, FONT_FAMILY, FONT_SIZE_SMALL, FONT_SIZE } from '../../../utils/constants';
import { normalizeFontSize } from '../../../utils';

const { height: screenHeight } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    bgicon: {
        width: '100%',
        height: screenHeight,
    },
    buttonContainer: {
        height: '20%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        flex: 1,
        fontFamily: FONT_FAMILY,
        paddingVertical: normalizeFontSize(3),
        fontSize: normalizeFontSize(FONT_SIZE_SMALL),
    },
    startButtonContainer: {
        width: '100%',
        padding: normalizeFontSize(2),
    },
    startButton: {
        width: '100%',
        fontSize: normalizeFontSize(FONT_SIZE),
        paddingVertical: normalizeFontSize(6),
    },
    selected: {
        backgroundColor: COLOR_MARKED,
    },
});

export default styles;
