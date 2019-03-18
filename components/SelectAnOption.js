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

class SelectAnOption extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Select an option.</Text>
        <Text style={styles.welcome}>I have an emblem.</Text>
        <View style={styles.button}>
          <Button
            title="Create A Profile"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('CreateAProfile')}/>
        </View>
        <Text style={styles.welcome}>I want to purchase an emblem.</Text>
        <View style={styles.button}>
          <Button
            title="Go to Store"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('SelectAnOption')}/>
        </View>
        <Text style={styles.welcome}> I want to explore the site.</Text>
        <View style={styles.button}>
          <Button
            title="Continue"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('CreateNewAccount')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: 280,
    height: 130,
  },
  container: {
    marginLeft: 60,
    marginRight: 60,
  },
  button: {
    marginTop: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#808080',
  },
  instructions: {
    color: '#808080',
    marginBottom: 5,
    fontSize: 15,
  },
  inputblock: {
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 20,
  },
  forgot: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  noaccount: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    color: '#808080',
  }
});


export default SelectAnOption;
