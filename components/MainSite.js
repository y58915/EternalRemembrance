/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, ScrollView} from 'react-native';
import {Card, ListItem, Button, Icon, Avatar, List} from 'react-native-elements';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class MainSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Shared: false,
      pressedFav1: false,
      pressedSad1: false,
      pressedPray1: false,
      pressedFav2: false,
      pressedSad2: false,
      pressedPray2: false,
      pressedFav3: false,
      pressedSad3: false,
      pressedPray3: false,
      pressedFav4: false,
      pressedSad4: false,
      pressedPray4: false,
    };
  }

  render() {

    const name = this.props.navigation.getParam('newname', 'Diego Moreno');

    const dob = this.props.navigation.getParam('newdob', '04/07/1977');

    const dod = this.props.navigation.getParam('newdod', '01/11/2016');

    const loc = this.props.navigation.getParam('newloc', 'Chico, CA');

    const intro = this.props.navigation.getParam
      ('intro', 'A friend to many, and the richest man that most of us have ever met.');

    return (
      <View style = {{flex: 1}}>
      <ScrollView>
        <ImageBackground
          source={require('../resources/test2.jpg')}
          style={{width: '100%', opacity: 0.8}}>
          <View style={{flexDirection: 'row'}}>
            <Avatar
              size = 'xlarge'
              round = 'false'
              source = {require('../resources/test1.jpg')}
              containerStyle = {{marginTop: 15, marginLeft: 15, width: 150, height: 150}}
              onPress = {() => this.props.navigation.navigate('EditProfile', {
                oldname: name,
                olddob: dob,
                olddod: dod,
                oldloc: loc,
                oldintro: intro,
              })}/>
              <View
                style={{
                  flex: 1,
                  marginTop: 25,
                  marginRight: 20,
                  alignItems: 'flex-end'
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 25,
                    }}>
                  {name}
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    marginTop: 7,
                    }}>
                  {dob} - {dod}
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    marginTop: 4,
                    }}>
                  {loc}
                </Text>
              </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Avatar
              size = 'large'
              round = 'false'
              source = {require('../resources/test3.png')}
              containerStyle={{
                marginTop: 30,
                marginLeft: 20,
                marginBottom:20,
                width: 90,
                height: 90
              }}
            />
            <View
              style={{
                flex: 1,
                marginTop: 70,
                marginRight: 10,
                marginLeft: 60,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 14,
                  marginTop: 4,
                  textAlign: 'right',
                }}>
                {intro}
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View style = {{flexDirection: 'row'}}>
        <View
          style = {{
            flex: 1,
            marginTop: 10,
            marginLeft: 10,
            alignItems: 'flex-start'
          }}>
        <Button
          type = 'outline'
          icon={
            <Icon
              name = {this.state.Shared?'share': 'share'}
              containerStyle = {{marginRight: 3}}/>
          }
          title= {this.state.Shared?'shared': 'share'}
          buttonStyle = {{width: 120}}
          onPress = {() => {this.setState({Shared: !this.state.Shared})}}/>
        </View>
        <View
          style = {{
            flex: 1,
            marginTop: 10,
            marginRight: 10,
            alignItems: 'flex-end'
          }}>
        <Button
          type = 'outline'
          icon={
            <Icon
              name = 'note'
              type = 'simple-line-icon'/>
          }
          buttonStyle = {{alignItems: 'baseline', width: 60}}
          onPress = {() => this.props.navigation.navigate('WriteStory')}/>
        </View>
        </View>

        <Card
          title='Jose Otero shared a story'
          image={require('../resources/test4.jpg')}
          imageStyle = {{height: 350, width: 350, alignSelf: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Button
              type = 'clear'
              title='0 View'
              buttonStyle = {{marginLeft: 5}}/>
            <Button
              type = 'clear'
              title='0 Comments'
              buttonStyle = {{marginLeft: 10}}/>
            <View style={{flexDirection: 'row', flex: 1, marginLeft: 12}}>
            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedFav1?'favorite': 'favorite-border'}
                  color='red'/>
              }
              title = {this.state.pressedFav1?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedFav1: !this.state.pressedFav1})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedSad1?'favorite': 'favorite-border'}
                  color='yellow'/>
              }
              title = {this.state.pressedSad1?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedSad1: !this.state.pressedSad1})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedPray1?'favorite': 'favorite-border'}
                  color='green'/>
              }
              title = {this.state.pressedPray1?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedPray1: !this.state.pressedPray1})}}/>
            </View>
          </View>
        </Card>

        <Card
          title='Jose Otero shared a story'
          image={require('../resources/test5.jpg')}
          imageStyle = {{height: 350, width: 350, alignSelf: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Button
              type = 'clear'
              title='0 View'
              buttonStyle = {{marginLeft: 5}}/>
            <Button
              type = 'clear'
              title='0 Comments'
              buttonStyle = {{marginLeft: 10}}/>
            <View style={{flexDirection: 'row', flex: 1, marginLeft: 12}}>
            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedFav2?'favorite': 'favorite-border'}
                  color='red'/>
              }
              title = {this.state.pressedFav2?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedFav2: !this.state.pressedFav2})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedSad2?'favorite': 'favorite-border'}
                  color='yellow'/>
              }
              title = {this.state.pressedSad2?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedSad2: !this.state.pressedSad2})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedPray2?'favorite': 'favorite-border'}
                  color='green'/>
              }
              title = {this.state.pressedPray2?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedPray2: !this.state.pressedPray2})}}/>
            </View>
          </View>
        </Card>

        <Card
          title='Jose Otero shared a story'
          image={require('../resources/test6.jpg')}
          imageStyle = {{height: 350, width: 350, alignSelf: 'center'}}>
          <Text style = {{fontSize: 15, marginTop: 5, marginBottom: 5, marginLeft: 5}}>
            Wish we would have been able to surf The Wedge
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Button
              type = 'clear'
              title='0 View'
              buttonStyle = {{marginLeft: 5}}/>
            <Button
              type = 'clear'
              title='0 Comments'
              buttonStyle = {{marginLeft: 10}}/>
            <View style={{flexDirection: 'row', flex: 1, marginLeft: 12}}>
            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedFav3?'favorite': 'favorite-border'}
                  color='red'/>
              }
              title = {this.state.pressedFav3?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedFav3: !this.state.pressedFav3})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedSad3?'favorite': 'favorite-border'}
                  color='yellow'/>
              }
              title = {this.state.pressedSad3?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedSad3: !this.state.pressedSad3})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedPray3?'favorite': 'favorite-border'}
                  color='green'/>
              }
              title = {this.state.pressedPray3?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedPray3: !this.state.pressedPray3})}}/>
            </View>
          </View>
        </Card>

        <Card
          title='Jose Otero shared a story'>
          <Text style = {{fontSize: 15, marginTop: 5, marginBottom: 5, marginLeft: 5}}>
            Diego {'\n'}
            You will always be thought of....
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Button
              type = 'clear'
              title='0 View'
              buttonStyle = {{marginLeft: 5}}/>
            <Button
              type = 'clear'
              title='0 Comments'
              buttonStyle = {{marginLeft: 10}}/>
            <View style={{flexDirection: 'row', flex: 1, marginLeft: 12}}>
            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedFav4?'favorite': 'favorite-border'}
                  color='red'/>
              }
              title = {this.state.pressedFav4?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedFav4: !this.state.pressedFav4})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedSad4?'favorite': 'favorite-border'}
                  color='yellow'/>
              }
              title = {this.state.pressedSad4?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedSad4: !this.state.pressedSad4})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedPray4?'favorite': 'favorite-border'}
                  color='green'/>
              }
              title = {this.state.pressedPray4?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedPray4: !this.state.pressedPray4})}}/>
            </View>
          </View>
        </Card>
      </ScrollView>
      </View>
    );
  }
}


export default MainSite;
