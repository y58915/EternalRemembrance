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
import SelectAnOption from './SelectAnOption';

class CreateNewAccount extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../resources/logo.jpg')}/>
        <Text style={styles.welcome}>Create New Account</Text>
        <Text style={styles.instructions}>Full Name</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' John Doe'>
        </TextInput>
        <Text style={styles.instructions}>Email</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' johndoe@mail.com'>
        </TextInput>
        <Text style={styles.instructions}>Password</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' ••••••'>
        </TextInput>
        <Text style={styles.instructions}>Confirm Password</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' ••••••'>
        </TextInput>
        <View style={styles.button}>
          <Button
            title="Sign Up"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('SelectAnOption')}/>
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

export default CreateNewAccount;
