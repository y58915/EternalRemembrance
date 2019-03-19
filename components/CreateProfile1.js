/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class CreateProfile1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Welcome! {"\n"}
        You are receiving {"\n"}
        6 months of free hosting.</Text>
        <Text style={styles.instructions}>Upgrade now for a discount.</Text>
        <View style={styles.button}>
          <Button
            title="Get 6 additional months for $29.99"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
        </View>
        <Text style={styles.or}>OR</Text>
        <View style={styles.button}>
          <Button
            title="Eternal Hosting for $259.99"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
        </View>
        <Text style={styles.without} onPress={() => this.props.navigation.navigate('Congrats')}>
          Continue without upgrade
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 60,
    marginRight: 60,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#808080',
  },
  instructions: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 18,
  },
  inputblock: {
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 20,
  },
  or: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#808080',
  },
  without: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 20,
    fontSize: 15,
    color: 'blue',
  }
});


export default CreateProfile1;
