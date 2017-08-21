import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeRouter as Router, Route, Link } from 'react-router-native';

import Player from '../components/Player';
import GameSettings from './Game/GameSettings';
import GameRound from './Game/GameRound';

export default class Game extends React.Component {
    render() {
        return (
            <Router>
                <View>
                    <Route exact path="/" render={() => (
                        <GameRound
                            numberOfPlayers={5}
                            startingLifeTotal={40} />
                    )} />
                    {/* <Route exact path="/" component={GameSettings} /> */}
                    {/* <Route path="/round/:playerAmount/:life" render={({ match }) => (
                        <GameRound
                            playerAmount={ match.params.playerAmount }
                            life={ match.params.life } />
                    )} /> */}
                </View>
            </Router>
        );
    }
}
