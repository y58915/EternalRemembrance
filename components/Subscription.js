/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image, CheckBox} from 'react-native';
import {createStackNavigator, createAppContainer, getParam} from 'react-navigation';

class Subscription extends Component {
  render() {
    const suboption = this.props.navigation.getParam('option');

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hosting Subscription</Text>
        <Text style={styles.detail}>
          {suboption}
        </Text>
        <Text style={styles.cardinfo}>Card Information</Text>
        <Text style={styles.instructions}>Card Number</Text>
        <TextInput
          style={styles.inputblock}
          keyboardType= 'number-pad'
          placeholder= ' 1234 5678 9101 1213'>
        </TextInput>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.instructions}>Expiry Date</Text>
            <TextInput
              style={styles.inputblockExpiry}
              keyboardType= 'number-pad'
              placeholder= ' 05/21'
              maxLength={4}/>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.instructions}>CVV</Text>
            <TextInput
              style={styles.inputblockCVV}
              keyboardType= 'number-pad'
              placeholder= ' 123'
              maxLength={3}/>
          </View>
        </View>
        <Text style={styles.instructions}>Cardholder Name</Text>
        <View>
        <TextInput
          style={styles.inputblock}
          placeholder=' John Doe'>
        </TextInput>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox style={{marginTop: 2}}/>
          <Text style={styles.instructions}>SAVE CARD</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Confirm"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Congrats')}/>
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
    marginTop: 15,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#808080',
  },
  cardinfo: {
    color: '#808080',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  detail: {
    color: '#808080',
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  instructions: {
    color: '#808080',
    marginTop: 8,
  },
  inputblock: {
    borderWidth: 1,
    marginBottom: 5,
    height: 45,
    fontSize: 18,
  },
  inputblockExpiry: {
    borderWidth: 1,
    marginBottom: 5,
    marginRight: 60,
    height: 45,
    fontSize: 18,
  },
  inputblockCVV: {
    borderWidth: 1,
    marginBottom: 5,
    marginRight: 70,
    height: 45,
    fontSize: 18,
  },
});


export default Subscription;
