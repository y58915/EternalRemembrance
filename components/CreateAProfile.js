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

class CreateAProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Enter your coupon code.</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' Coupon Code'>
        </TextInput>
        <View style={styles.button}>
          <Button
            title="Continue"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('SelectAnOption')}/>
        </View>
        <Text style={styles.instructions}>Don't have one?</Text>
        <View style={styles.button}>
          <Button
            title="See Pricing Options"
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
    marginTop: 5,
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
    marginTop: 50,
    marginBottom: 5,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputblock: {
    borderWidth: 1,
    marginBottom: 15,
    height: 45,
    fontSize: 18,
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


export default CreateAProfile;
