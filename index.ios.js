
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PostIndexContainer from "./app/components/posts/post_index_container";

export default class RedditView extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="index" component={PostIndexContainer} title="Home" initial={true} />
        </Scene>
     </Router>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RedditView', () => RedditView);

// <View style={styles.container}>
//   <Text style={styles.welcome}>
//     Welcome to RedditView!
//   </Text>
//   <Text style={styles.instructions}>
//     To get started, edit index.ios.js
//   </Text>
//   <Text style={styles.instructions}>
//     Press Cmd+R to reload,{'\n'}
//     Cmd+D or shake for dev menu
//   </Text>
// </View>
