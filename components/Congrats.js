/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image, CheckBox} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class Congrats extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Congrats! {"\n"}
        Your payment information {"\n"}
        has been stored.
        </Text>
        <Text style={styles.detail}>
          You may now begin creating your loved one's profile
          and sharing loving memories that last forever.
        </Text>
        <View style={styles.button}>
          <Button
            title="Create Profile"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('CreateProfile1')}/>
        </View>
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
    marginTop: 25,
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#808080',
  },
  cardinfo: {
    color: '#808080',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  detail: {
    color: '#808080',
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  instructions: {
    color: '#808080',
    marginTop: 8,
  },
  inputblock: {
    borderWidth: 1,
    marginBottom: 5,
    height: 45,
    fontSize: 18,
  },
  inputblockExpiry: {
    borderWidth: 1,
    marginBottom: 5,
    marginRight: 60,
    height: 45,
    fontSize: 18,
  },
  inputblockCVV: {
    borderWidth: 1,
    marginBottom: 5,
    marginRight: 70,
    height: 45,
    fontSize: 18,
  },
});


export default Congrats;
