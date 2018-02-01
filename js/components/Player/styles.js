import { StyleSheet } from 'react-native';
import { COLOR_FOREGROUND, COLOR_BACKGROUND, COLOR_MARKED } from '../../utils/constants';

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
        color: COLOR_FOREGROUND,
        fontSize: 24,
        alignSelf: 'center',
        paddingVertical: 5,
    },
});

export default styles;
