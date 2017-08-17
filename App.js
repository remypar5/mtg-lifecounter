import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeRouter as Router, Route, Link } from 'react-router-native';
import Game from './sections/Game';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Route exact path='/' render={() => (
            <Link to="/game"><Text>Start</Text></Link>
          )} />
          <Route path="/game" component={ Game } />
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbar: {
    height: 50,
    backgroundColor: 'steelblue'
  }
});
