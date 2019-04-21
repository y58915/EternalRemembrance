/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Button} from 'react-native-elements';

class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Forgot Password</Text>
        <Text style={styles.instructions}>Password</Text>
        <TextInput
          style={styles.inputblockpassword}
          secureTextEntry= {true}
          placeholder=' ••••••'>
        </TextInput>
        <Text style={styles.instructions}>Confirm Password</Text>
        <TextInput
          style={styles.inputblockpassword}
          secureTextEntry= {true}
          placeholder=' ••••••'>
        </TextInput>
        <View style={styles.button}>
          <Button
            title="Confirm New Password"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Login')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
    width: 260,
    height: 115,
  },
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
    margin: 10,
    fontWeight: 'bold',
    color: '#808080',
  },
  instructions: {
    color: '#808080',
    marginBottom: 5,
    fontSize: 15,
  },
  inputblockpassword: {
    borderWidth: 1,
    marginBottom: 10,
    height: 40,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputblock: {
    borderWidth: 1,
    marginBottom: 10,
    height: 45,
    fontSize: 18,
  },
  forgot: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 10,
    fontSize: 15,
    color: 'blue',
  },
  noaccount: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    color: '#808080',
  }
});

export default ForgotPassword;
