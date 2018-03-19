import { StyleSheet } from 'react-native';

const id = (val) => val === 0 || !!val;

const flattenStyles = (...values) => StyleSheet.flatten([...values].filter(id));

export default flattenStyles;
