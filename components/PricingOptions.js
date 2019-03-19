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
            title=" $5.99 / month (after first 6 months)"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Subscription')}/>
        </View>
        <View style={styles.button}>
        <Button
          title=" Get 6 additional months for $29.99"
          color="#0000FF"
          onPress={() => this.props.navigation.navigate('Subscription')}/>
      </View>
        <View style={styles.button}>
          <Button
            title=" Eternal Hosting (10 years) for $259.99"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Subscription')}/>
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

export default PricingOptions;
