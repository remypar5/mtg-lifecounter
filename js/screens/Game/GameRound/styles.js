import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#161616',
        flex: 1,
        flexDirection: 'row',
    },
    column: {
        width: '50%',
    },
    asColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    rotated180: {
        transform: [
            { rotate: '180deg' },
        ],
    },
});

export default styles;
