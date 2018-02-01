import { StyleSheet, Dimensions } from 'react-native';

import { COLOR_BACKGROUND, COLOR_FOREGROUND, COLOR_MARKED, FONT_FAMILY } from '../../../utils/constants';

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
        height: 50,
        backgroundColor: COLOR_BACKGROUND,
        color: COLOR_FOREGROUND,
        fontFamily: FONT_FAMILY,
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'baseline',
    },
    startButton: {
        width: '100%',
        height: 40,
        fontSize: 36,
        borderColor: '#161616',
        borderWidth: 6,
    },
    selected: {
        backgroundColor: COLOR_MARKED,
    },
});

export default styles;
