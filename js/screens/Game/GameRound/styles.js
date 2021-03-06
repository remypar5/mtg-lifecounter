import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    column: {
        width: '50%',
    },
    asColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    asRow: {
        flex: 1,
        flexDirection: 'row',
    },
    rotated180: {
        transform: [
            { rotate: '180deg' },
        ],
    },
});

export default styles;
