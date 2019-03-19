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

class CreateProfile2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Administrator Rights </Text>
        <Text style={styles.instructions}>Invite administrators to contribute and have special access to this page.</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' xxxx@gmail.com'>
        </TextInput>
        <View style={styles.button}>
          <Button
            title="Invite"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
        </View>
        <View style={styles.button}>
          <Button
            title="Add New Admin"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
        </View>
        <View style={styles.button}>
          <Button
            title="Continue"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('CreateProfile3')}/>
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


export default CreateProfile2;
