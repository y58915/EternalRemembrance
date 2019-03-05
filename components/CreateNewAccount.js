/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class CreateNewAccount extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CreateNewAccount</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
