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

class CreateProfile2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Step 2: {"\n"}
          Administrator Rights
        </Text>
        <Text style={styles.instructions}>
          Invite administrators to contribute and have special access to this page.
        </Text>

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <TextInput
              style={styles.inputblock}
              placeholder= ' Enter valid email address'/>
          </View>
          <View style={styles.button, {flex: 1}}>
            <Button
              title="Invite"
              color="#0000FF"
              buttonStyle = {{height: 35}}
              onPress={() => this.props.navigation.navigate('Empty')}/>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            title="Add New Admin"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('Empty')}/>
        </View>
        <View style={styles.bottomButton}>
          <Button
            title="Continue"
            color="#0000FF"
            containerStyle = {{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('CreateProfile3')}/>
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
  instructions: {
    color: '#808080',
    fontSize: 15,
    marginBottom: 30,
  },
  inputblock: {
    borderWidth: 1,
    marginBottom: 10,
    marginRight: 10,
    height: 35,
    fontSize: 13,
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
