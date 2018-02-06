import { StyleSheet, Dimensions } from 'react-native';

import { COLOR_FOREGROUND, COLOR_MARKED, FONT_FAMILY } from '../../../utils/constants';
import { normalizeFontSize } from '../../../utils';

const { height: screenHeight } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#161616',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
    },
    bgicon: {
        width: '100%',
        height: screenHeight,
    },
    label: {
        color: COLOR_FOREGROUND,
        fontSize: 25,
        textAlign: 'left',
        width: '95%',
        alignSelf: 'center',
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
        fontSize: normalizeFontSize(18),
        paddingVertical: 12,
        fontFamily: FONT_FAMILY,
    },
    startButtonContainer: {
        width: '100%',
        padding: 6,
    },
    startButton: {
        width: '100%',
        fontSize: normalizeFontSize(24),
        paddingVertical: 12,
    },
    selected: {
        backgroundColor: COLOR_MARKED,
    },
});

export default styles;
