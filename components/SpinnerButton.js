import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

export default class SpinnerButton extends React.Component {
    constructor(props) {
        super(props);

        this._onPress = props.onPress.bind(this);
        if (props.onLongPress) {
            this._onLongPress = props.onLongPress.bind(this);
        }
    }
    
    render() {
        const props = this.props;
        
        return (
            <TouchableHighlight style={ styles.hitbox } 
                onPress={ this._onPress } onLongPress={ this._onLongPress }>
                <Text style={ styles.button }>{ props.content }</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    hitbox: {
        width: '40%',
    },
    button: {
        fontSize: 20,
        height: '100%',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});