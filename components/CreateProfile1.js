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
        Required Loved One's Information </Text>
        <Text style={styles.instructions}>First Name</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' John Doe'>
        </TextInput>
        <Text style={styles.instructions}>Middle Name</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' John Doe'>
        </TextInput>
        <Text style={styles.instructions}>Last Name</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' John Doe'>
        </TextInput>
        <Text style={styles.instructions}>Date of Birth</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' xx/xx/xxxx'>
        </TextInput>
        <Text style={styles.instructions}>Date of Death</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' xx/xx/xxxx'>
        </TextInput>
        <View style={styles.button}>
          <Button
            title="Continue"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('CreateProfile2')}/>
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
  inputblock: {
    borderWidth: 1,
    marginBottom: 20,
    height: 45,
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
