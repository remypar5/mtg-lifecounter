import { StyleSheet } from 'react-native';
import { COLOR_BACKGROUND, COLOR_MARKED, FONT_SIZE_TINY, FONT_SIZE } from '../../utils/constants';
import { normalizeFontSize } from '../../utils';

const styles = StyleSheet.create({
    tile: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderColor: COLOR_BACKGROUND,
        borderWidth: 3,
        borderStyle: 'solid',
        width: '100%',
        height: '100%',
    },
    gameOver: {
        backgroundColor: COLOR_MARKED,
    },
    playerName: {
        alignSelf: 'center',
        paddingVertical: 5,
    },
    playerNameSmall: {
        fontSize: normalizeFontSize(FONT_SIZE_TINY),
    },
    playerNameLarge: {
        fontSize: normalizeFontSize(FONT_SIZE),
    },
});

export default styles;
