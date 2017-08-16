import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import SpinnerButton from './SpinnerButton';

export default class NumberSpinner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this.addPoints = this.addPoints.bind(this);
        this.subtractPoints = this.subtractPoints.bind(this);
    }
    
    render() {
        const props = this.props;
        
        return (
            <View style={ styles.container }>
                <SpinnerButton content="-"
                    onPress={ () => this.subtractPoints(1) } onLongPress={ () => this.subtractPoints(10) } />
                <Text style={ styles.value }>{ this.state.value }</Text>
                <SpinnerButton content="+"
                    onPress={ () => this.addPoints(1) } onLongPress={ () => this.addPoints(10) } />
            </View>
        );
    }
    
    setLife(value) {
        // TODO: use actions and reducers
        this.setState({
            value
        });
    }
    
    addPoints(points = 0) {
        this.setLife(this.state.value + points);
    }
    
    subtractPoints(points = 0) {
        this.setLife(this.state.value - points);
    }
    
}

const styles = StyleSheet.create({
    container: {
        elevation: 20,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', // Horizontal
        alignItems: 'stretch', // Vertical
    },
    value: {
        width: '20%',
        height: '100%',
        textAlignVertical: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
    }
});