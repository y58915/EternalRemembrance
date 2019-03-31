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
        <View style={{marginTop: 30}}>
          <Text style={styles.detail}>
            Step 4:
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.detail}>Upload Profile Picture</Text>
          <Text style={styles.optional}> (optional)</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Browse Phone"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
        </View>
        <View style={styles.bottomButton}>
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
    flex: 1,
    marginLeft: 60,
    marginRight: 60,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
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
  bottomButton: {
    position: 'absolute',
    bottom: '8%',
    width: '100%',
  },
});


export default CreateProfile5;
