/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image, ScrollView} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Button, Avatar, Input, Card, Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NameEditable: false,
      DOBEditable: false,
      DODEditable: false,
      LocEditable: false,
      IntroEditable: false,
      newname: '',
      newdob: '',
      newdod: '',
      newloc: '',
      newintro: '',
    };
  }

  render() {
    const name = this.props.navigation.getParam('oldname');
    const dob = this.props.navigation.getParam('olddob');
    const dod = this.props.navigation.getParam('olddod');
    const loc = this.props.navigation.getParam('oldloc');
    const intro = this.props.navigation.getParam('oldintro');

    return (
      <View style = {{flex: 1}}>

        <View style = {{height: 500}}>
        <ScrollView>
          <View style = {{alignSelf: 'center', marginTop: 10}}>
            <Avatar
              size = 'xlarge'
              round = 'false'
              source = {this.state.newimage ? this.state.newimage : require('../resources/test1.jpg')}
              containerStyle = {{marginTop: 15, marginLeft: 15, width: 150, height: 150}}
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
                        newimage: {
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

          <View style = {{flexDirection: 'row', marginTop: 10}}>
            <View style = {{flex: 1, marginLeft: 20, marginTop: 15}}>
              <Text style = {{fontSize: 20}}>
                Name
              </Text>
            </View>
            <View style={{flex: 2, marginLeft: 10, marginRight: 10}}>
              <Input
                placeholder = {name}
                editable = {this.state.NameEditable? true: false}
                placeholderTextColor= {this.state.NameEditable? 'black': 'gray'}
                onChangeText={(newname) => this.setState({newname})}
                rightIcon = {
                  <Icon
                    name ='edit'
                    type = 'antdesign'
                    onPress = {() => {this.setState({NameEditable: true})}}
                  />}/>
            </View>
          </View>

          <View style = {{flexDirection: 'row', marginTop: 10}}>
            <View style = {{flex: 1, marginLeft: 20, marginTop: 15}}>
              <Text style = {{fontSize: 20}}>
                Date of Birth
              </Text>
            </View>
            <View style={{flex: 2, marginLeft: 10, marginRight: 10}}>
              <Input
                placeholder = {dob}
                editable = {this.state.DOBEditable? true: false}
                placeholderTextColor= {this.state.DOBEditable? 'black': 'gray'}
                onChangeText={(newdob) => this.setState({newdob})}
                rightIcon = {
                  <Icon
                    name ='edit'
                    type = 'antdesign'
                    onPress = {() => {this.setState({DOBEditable: true})}}
                  />}/>
            </View>
          </View>

          <View style = {{flexDirection: 'row', marginTop: 10}}>
            <View style = {{flex: 1, marginLeft: 20, marginTop: 15}}>
              <Text style = {{fontSize: 20}}>
                Date of Death
              </Text>
            </View>
            <View style={{flex: 2, marginLeft: 10, marginRight: 10}}>
              <Input
                placeholder = {dod}
                editable = {this.state.DODEditable? true: false}
                placeholderTextColor= {this.state.DODEditable? 'black': 'gray'}
                onChangeText={(newdod) => this.setState({newdod})}
                rightIcon = {
                  <Icon
                    name ='edit'
                    type = 'antdesign'
                    onPress = {() => {this.setState({DODEditable: true})}}
                  />}/>
            </View>
          </View>

          <View style = {{flexDirection: 'row', marginTop: 10}}>
            <View style = {{flex: 1, marginLeft: 20, marginTop: 15}}>
              <Text style = {{fontSize: 20}}>
                Location
              </Text>
            </View>
            <View style={{flex: 2, marginLeft: 10, marginRight: 10}}>
              <Input
                placeholder = {loc}
                editable = {this.state.LocEditable? true: false}
                placeholderTextColor= {this.state.LocEditable? 'black': 'gray'}
                onChangeText={(newloc) => this.setState({newloc})}
                rightIcon = {
                  <Icon
                    name ='edit'
                    type = 'antdesign'
                    onPress = {() => {this.setState({LocEditable: true})}}
                  />}/>
            </View>
          </View>

          <View style = {{marginTop: 10}}>
            <View style = {{marginLeft: 20, marginTop: 15}}>
              <Text style = {{fontSize: 20}}>
                Introduction
              </Text>
            </View>
            <View style={{marginLeft: 10, marginRight: 10}}>
              <Input
                placeholder = {intro}
                multiline
                editable = {this.state.IntroEditable? true: false}
                placeholderTextColor= {this.state.IntroEditable? 'black': 'gray'}
                onChangeText={(newintro) => this.setState({newintro})}
                rightIcon = {
                  <Icon
                    name ='edit'
                    type = 'antdesign'
                    onPress = {() => {this.setState({IntroEditable: true})}}
                  />}/>
            </View>
          </View>
        </ScrollView>
        </View>

        <View style={styles.bottomButton}>
          <Button
            title="Continue"
            color="#0000FF"
            containerStyle = {{marginTop: 20, marginBottom: 20}}
            onPress={() => this.props.navigation.navigate('MainSite', {
                newname: this.state.newname? this.state.newname: name,
                newdob: this.state.newdob? this.state.newdob: dob,
                newdod: this.state.newdod? this.state.newdod: dod,
                newloc: this.state.newloc? this.state.newloc: loc,
                newintro: this.state.newintro? this.state.newintro: intro,
            })}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomButton: {
    backgroundColor: 'white',
    height: 80,
    position: 'absolute',
    bottom: '0%',
    width: '100%',
  },
});

export default EditProfile;
