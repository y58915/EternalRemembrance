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

class CreateProfile4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={styles.detail}>Connect Emblem</Text>
          <Text style={styles.optional}> (optional at this time)</Text>
        </View>
        <Text style={styles.method}>Method 1</Text>
        <Text style={styles.instructions}>
          Ensure your location services are turned on and you are standing
          at the site of your where your emblem will be located. Tap the
          'Locate My Position' button below to connect this emblem.
        </Text>
        <View style={styles.button}>
          <Button
            title="Locate My Position"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
        </View>
        <Text style={styles.method}>Method 2</Text>
        <Text style={styles.instructions}>
          Search or enter a location. Drag and drop a pin on the map
          at the chosen location.
        </Text>
        <TextInput
          style={styles.inputblock}
          placeholder= ' Search a location'>
        </TextInput>
        <View style={styles.button}>
          <Button
            title="Open Map"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
        </View>
        <Text style={styles.later}>
          You may press 'Continue' to come back to this step at a later time.
        </Text>
        <View style={styles.button}>
          <Button
            title="Continue"
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
    fontSize: 15,
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
    marginTop: 10,
    height: 45,
    fontSize: 18,
  },
});


export default CreateProfile4;
