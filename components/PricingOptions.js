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

class PricingOptions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Pricing Options</Text>
        <View style={styles.button}>
          <Button
            title="$5.99/ month (after first 6 months)"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('SelectAnOption')}/>
        </View>
        <View style={styles.button}>
          <Button
            title="Get 6 additional months for $29.99"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('SelectAnOption')}/>
        </View>
        <View style={styles.button}>
          <Button
            title="Eternal Hosting for $259.99"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('SelectAnOption')}/>
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
    marginBottom: 30,
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


export default PricingOptions;
