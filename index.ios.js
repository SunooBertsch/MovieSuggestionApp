/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 //react-native init 'filename' (starts up new folder for new project)
 //cmd+D to open console.log on chrome
 //react-native run-ios (starts iphone sim)

import React from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import Landing from './src/components/landing.js'
import random from './src/components/random.js' 

const App = () => (
  <NativeRouter>
    <Landing />
  </NativeRouter>
);

AppRegistry.registerComponent('hack2', () => App);
