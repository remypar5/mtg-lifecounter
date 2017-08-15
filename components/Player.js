import React from 'react';
import { StyleSheet, Button, View, Text, TouchableHighlight } from 'react-native';
import LifeButton from './LifeButton';

export default class Player extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            points: props.player.lifeTotal
        };

        this.addLife = this.addLife.bind(this);
        this.subtractLife = this.subtractLife.bind(this);
    }
    
    render() {
        const player = this.props.player;
        const points = this.state.points;
        
        return (
            <View style={ styles.tile }>
                <Text style={ styles.playerName }>{ player.name }</Text>
                <View style={ styles.lifeContainer }>
                    <LifeButton content="-" onPress={ () => this.subtractLife(1) } onLongPress={ () => this.subtractLife(10) } />
                    <Text style={ styles.points }>{ points }</Text>
                    <LifeButton content="+" onPress={ () => this.addLife(1) } onLongPress={ () => this.addLife(10) } />
                </View>
            </View>
        );
    }

    setLife(points) {
        this.setState({
            points
        });
    }
    
    addLife(points = 1) {
        this.setLife(this.state.points + points);
    }

    subtractLife(points = 1) {
        this.setLife(this.state.points - points);
    }
}

const styles = StyleSheet.create({
    tile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '100%',
    },
    playerName: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        elevation: 30,
    },
    lifeContainer: {
        elevation: 20,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', // Horizontal
        alignItems: 'stretch', // Vertical
    },
    points: {
        width: '20%',
        height: '100%',
        textAlignVertical: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
    }
});