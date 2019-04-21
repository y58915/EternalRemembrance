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
import ImagePicker from 'react-native-image-crop-picker';

class CreateProfile5 extends Component {

  constructor() {
    super();
    this.state = {
      image: null
    };
  }

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
        <View>
          <Image style={{width: 300, height: 300, resizeMode: 'contain'}}
            source={this.state.image ? this.state.image : require('../resources/DefaultProfile.png')} />
        </View>
        <View style={styles.button}>
          <Button
            title="Browse Phone"
            color="#0000FF"
            onPress={() => {ImagePicker.openPicker({
                    width: 300,
                    height: 300,
                    cropping: true,
                    compressImageMaxWidth: 1000,
                    compressImageMaxHeight: 1000,
                    compressImageQuality: 1,
                    includeExif: true,
                  }).then(image => {
                    console.log('received image', image);
                    this.setState({
                      image: {
                        uri: image.path,
                        width: image.width,
                        height: image.height,
                        mime: image.mime},
                    });
                  }).catch(e => {
                    console.log(e);
                    Alert.alert(e.message ? e.message : e);
                  });
                }
              }/>
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
