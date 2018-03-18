import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height,
    },
});

export default styles;
