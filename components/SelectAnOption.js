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
import CreateAProfile from './EnterCoupon';
import PricingOptions from './PricingOptions';
import GoToStore from './GoToStore';


class SelectAnOption extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Select an option.</Text>
        <Text style={styles.regular}>I have an emblem.</Text>
        <View style={styles.button}>
          <Button
            title="Create A Profile"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('EnterCoupon')}/>
        </View>
        <Text style={styles.regular}>I want to purchase an emblem.</Text>
        <View style={styles.button}>
          <Button
            title="Go to Store"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
        </View>
        <Text style={styles.regular}> I want to explore the site.</Text>
        <View style={styles.button}>
          <Button
            title="Continue"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
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
    marginBottom: 30,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#808080',
  },
  instructions: {
    color: '#808080',
    marginBottom: 5,
    fontSize: 17,
    textAlign: 'center',
  },
  regular: {
    marginTop: 15,
    color:'#808080',
    textAlign: 'center',
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
