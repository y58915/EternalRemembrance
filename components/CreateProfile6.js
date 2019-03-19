/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class CreateProfile6 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 30}}>
          <Text style={styles.detail}>Key Dates</Text>
          <Text style={styles.optional}> (optional)</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.instructions}>Month</Text>
            <TextInput
              style={styles.inputblockdate}
              placeholder = ' April'/>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.instructions}>Day</Text>
            <TextInput
              style={styles.inputblockdate}
              placeholder = ' 23'/>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.instructions}>Year</Text>
            <TextInput
              style={styles.inputblockdate}
              placeholder = ' 1925'/>
          </View>
        </View>
        <Text style={styles.instructions}>Description</Text>
        <TextInput
          style={styles.inputblock}
          placeholder = 'Anniversary'/>
        <View style={styles.button}>
          <Button
            title="Add Key Date"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
        </View>
        <View style={styles.buttonbottom}>
          <Button
            title="Finish"
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
    marginTop: 10,
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#808080',
  },
  instructions: {
    color: '#808080',
    fontSize: 13,
  },
  buttonbottom: {
    marginTop: 250,
  },
  method: {
    color: '#808080',
    fontSize: 17,
  },
  optional: {
    color: '#808080',
    fontSize: 17,
  },
  later: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 15,
    marginTop: 20,
  },
  inputblock: {
    borderWidth: 1,
    marginTop: 4,
    marginBottom: 6,
    height: 45,
    fontSize: 18,
  },
  inputblockdate: {
    borderWidth: 1,
    marginTop: 4,
    marginBottom: 6,
    marginRight: 20,
    height: 45,
    fontSize: 18,
  },
});


export default CreateProfile6;
