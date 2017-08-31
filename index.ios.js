/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 //cmd+D to open console.log on chrome

import React from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import Header from './src/components/header.js'
import random from './src/components/random.js'

const Home = () => (
  <Text style={styles.header}>
    Home
  </Text>
)

const About = () => (
  <Text style={styles.header}>
    About
  </Text>
)

const Topics = () => (
  <Text style={styles.header}>
    Topics
  </Text>
)

const App = () => (
   <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link
          to="/"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>Home</Text>
        </Link>
        <Link
          to="/about"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>About</Text>
        </Link>
        <Link
          to="/topics"
          underlayColor='#f0f4f7'
          style={styles.navItem} >
            <Text>Topics</Text>
        </Link>
        <Link
          to="/random"
          underlayColor='#f0f4f7'
          style={styles.navItem} >
            <Text>random</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/random" component={random}/>
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})

AppRegistry.registerComponent('hack2', () => App);
