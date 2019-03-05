/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class SelectAnOption extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SelectAnOption</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
