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

class CreateProfile5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={styles.detail}>Upload Profile Picture</Text>
          <Text style={styles.optional}> (optional)</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Browse Phone"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
        </View>
        <View style={styles.buttonbottom}>
          <Button
            title="Continue"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('CreateProfile6')}/>
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
  buttonbottom: {
    marginTop: 400,
  },
  detail: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#808080',
  },
  optional: {
    color: '#808080',
    fontSize: 17,
  },
});


export default CreateProfile5;
