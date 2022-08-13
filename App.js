/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import BookInfoScreen from './sy_src/screens/BookInfoScreen';
import CompletedScreen from './sy_src/screens/CompletedScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <BookInfoScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
});

export default App;