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
import ImagePicker from 'react-native-image-picker';

class CreateProfile5 extends Component {
  render() {
    const options = {
      title: 'Select Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

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
            onPress={() => {ImagePicker.showImagePicker(options, (response) => {
              console.log('Response = ', response);

              if (response.didCancel) {
                console.log('User cancelled image picker');
              }
              else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
                this.setState({
                  avatarSource: source,
                });
              }
            });}}/>
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
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: 260,
    height: 115,
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
