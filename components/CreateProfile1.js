/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image, ScrollView} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Button} from 'react-native-elements';

class CreateProfile1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Step 1: {"\n"}
          Required Loved One's Information
        </Text>
        <Text style={styles.instructions}>First Name</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' Sally'>
        </TextInput>
        <Text style={styles.instructions}>Middle Name</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' Jane'>
        </TextInput>
        <Text style={styles.instructions}>Last Name</Text>
        <TextInput
          style={styles.inputblock}
          placeholder=' Doe'>
        </TextInput>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.instructions}>Date of Birth</Text>
            <TextInput
              style={styles.inputblockBirth}
              placeholder= ' xx/xx/xxxx'/>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.instructions, {marginLeft: 10}}>Date of Death</Text>
            <TextInput
              style={styles.inputblockDeath}
              placeholder= ' xx/xx/xxxx'/>
          </View>
        </View>
        <View style={styles.bottomButton}>
          <Button
            title="Continue"
            color="#0000FF"
            containerStyle = {{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('CreateProfile2')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 60,
    marginRight: 60,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  bottomButton: {
    backgroundColor: 'white',
    height: 80,
    position: 'absolute',
    bottom: '0%',
    width: '100%',
  },
  welcome: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#808080',
  },
  inputblock: {
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 5,
    height: 40,
    fontSize: 16,
  },
  inputblockBirth: {
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 5,
    marginRight: 10,
    height: 40,
    fontSize: 16,
  },
  inputblockDeath: {
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 10,
    height: 40,
    fontSize: 16,
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
