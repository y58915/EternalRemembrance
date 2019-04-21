/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Button} from 'react-native-elements';

class CreateProfile6 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 30}}>
          <Text style={styles.detail}>
            Step 6:
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text style={styles.detail}>Key Dates</Text>
          <Text style={styles.optional}> (optional)</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.instructions}>Month</Text>
            <TextInput
              style={styles.inputblockMonth}
              placeholder = ' April'/>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.instructions, {marginLeft: 3}}>Day</Text>
            <TextInput
              style={styles.inputblockDay}
              placeholder = ' 23'/>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.instructions, {marginLeft: 6}}>Year</Text>
            <TextInput
              style={styles.inputblockyear}
              placeholder = ' 1925'/>
          </View>
        </View>
        <Text style={styles.instructions}>Description</Text>
        <TextInput
          style={styles.inputblock}
          placeholder = ' Anniversary'/>
        <View style={styles.button}>
          <Button
            title="Add Key Date"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
        </View>
        <View style={styles.bottomButton}>
          <Button
            title="Finish"
            color="#0000FF"
            containerStyle = {{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('MainSite')}/>
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
  detail: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#808080',
  },
  instructions: {
    color: '#808080',
    fontSize: 13,
  },
  bottomButton: {
    backgroundColor: 'white',
    height: 80,
    position: 'absolute',
    bottom: '0%',
    width: '100%',
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
    height: 40,
    fontSize: 18,
  },
  inputblockMonth: {
    borderWidth: 1,
    marginTop: 4,
    marginBottom: 6,
    marginRight: 6,
    height: 40,
    fontSize: 18,
  },
  inputblockDay: {
    borderWidth: 1,
    marginTop: 4,
    marginBottom: 6,
    marginRight: 3,
    marginLeft: 3,
    height: 40,
    fontSize: 18,
  },
  inputblockyear: {
    borderWidth: 1,
    marginTop: 4,
    marginBottom: 6,
    marginLeft: 6,
    height: 40,
    fontSize: 18,
  },
});


export default CreateProfile6;
