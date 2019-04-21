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

class CreateProfile4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 30}}>
          <Text style={styles.detail}>
            Step 4:
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.detail}>
            Connect Emblem
          </Text>
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
        <View style={{marginTop: 30}}>
          <Text style={styles.later}>
            You may press 'Continue' to come back to this step at a later time.
          </Text>
        </View>
        <View style={styles.bottomButton}>
          <Button
            title="Continue"
            color="#0000FF"
            containerStyle = {{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('CreateProfile5')}/>
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
    fontSize: 17,
    fontWeight: 'bold',
    color: '#808080',
  },
  instructions: {
    color: '#808080',
    fontSize: 15,
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
    marginTop: 5,
  },
  optional: {
    color: '#808080',
    fontSize: 15,
  },
  later: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 15,
    marginBottom: 20,
  },
  inputblock: {
    borderWidth: 1,
    marginTop: 10,
    height: 40,
    fontSize: 18,
  },
});


export default CreateProfile4;
