/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, ScrollView} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ImagePicker from 'react-native-image-crop-picker';

class WriteStory extends Component {

  constructor() {
    super();
    this.state = {
      image: null,
      text: ''
    };
  }

  render() {
    return (
      <View style = {{flex: 1}}>
      <View style={{height: '80%'}}>
        <ScrollView>
          <View>
            <Input
              placeholder='Share a story'
              multiline = {true}
              onChangeText={(text) => this.setState({text})}/>
          </View>
          <View>
          <Image style={{width: 350, height: 350, resizeMode: 'contain'}}
            source={this.state.image ? this.state.image : require('../resources/white.png')} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomButton}>
      <View
        style = {{
          flex: 1,
          marginTop: 30,
          marginLeft: 30,
          alignItems: 'flex-start'
        }}>
      <Button
        type = 'clear'
        icon={
          <Icon
            name = 'picture'
            type = 'antdesign'
        />}
        onPress={() => {ImagePicker.openPicker({
            width: 350,
            height: 350,
            cropping: true,
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
      <View
        style = {{
          flex: 1,
          marginTop: 30,
          marginRight: 30,
          alignItems: 'flex-end'
        }}>
      <Button
        type = 'outline'
        title = 'Continue'
        buttonStyle = {{alignItems: 'baseline'}}
        onPress = {() => this.props.navigation.navigate('MainSite2', {
            imagesrc: this.state.image,
            text: this.state.text,
          })}/>
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomButton: {
    backgroundColor: 'white',
    height: 80,
    flexDirection: 'row',
    position: 'absolute',
    bottom: '0%',
    width: '100%',
  },
});

export default WriteStory;
