import React, { Component } from 'react';
import Main from './Main'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

const App = () => (
  <NavigatorIOS
      initialRoute={{
        component: Main,
        title: 'My Initial Scene',
      }}
      style={{flex: 1}}
    />
)

export default App
