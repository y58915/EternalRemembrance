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
    this.state = { Favorited: false }
    this.state = { Shared: false }
    this.state = { pressedFav: false }
    this.state = { pressedSad: false }
    this.state = { pressedPray: false };
  }

  render() {
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
              />
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
                  Diego Moreno
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    marginTop: 7,
                    }}>
                  04/07/1977 - 01/11/2016
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    marginTop: 4,
                    }}>
                  Chico, CA
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
                marginLeft: 70,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  marginTop: 4,
                  textAlign: 'right',
                }}>
                A friend to many, and the richest man that most of us have ever met.
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
              name = {this.state.Favorited?'star': 'star-border'}
              containerStyle = {{marginRight: 3}}/>
          }
          title= {this.state.Favorited?'favorited': 'favorite'}
          buttonStyle = {{width: 120}}
          onPress = {() => {this.setState({Favorited: !this.state.Favorited})}}/>
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
              name = {this.state.Shared?'share': 'share'}
              containerStyle = {{marginRight: 3}}/>
          }
          title= {this.state.Shared?'shared': 'share'}
          buttonStyle = {{alignItems: 'baseline', width: 120}}
          onPress = {() => {this.setState({Shared: !this.state.Shared})}}/>
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
                  name = {this.state.pressedFav?'favorite': 'favorite-border'}
                  color='red'/>
              }
              title = {this.state.pressedFav?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedFav: !this.state.pressedFav})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedSad?'favorite': 'favorite-border'}
                  color='yellow'/>
              }
              title = {this.state.pressedSad?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedSad: !this.state.pressedSad})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedPray?'favorite': 'favorite-border'}
                  color='green'/>
              }
              title = {this.state.pressedPray?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedPray: !this.state.pressedPray})}}/>
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
                  name = {this.state.pressedFav?'favorite': 'favorite-border'}
                  color='red'/>
              }
              title = {this.state.pressedFav?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedFav: !this.state.pressedFav})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedSad?'favorite': 'favorite-border'}
                  color='yellow'/>
              }
              title = {this.state.pressedSad?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedSad: !this.state.pressedSad})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedPray?'favorite': 'favorite-border'}
                  color='green'/>
              }
              title = {this.state.pressedPray?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedPray: !this.state.pressedPray})}}/>
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
                  name = {this.state.pressedFav?'favorite': 'favorite-border'}
                  color='red'/>
              }
              title = {this.state.pressedFav?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedFav: !this.state.pressedFav})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedSad?'favorite': 'favorite-border'}
                  color='yellow'/>
              }
              title = {this.state.pressedSad?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedSad: !this.state.pressedSad})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedPray?'favorite': 'favorite-border'}
                  color='green'/>
              }
              title = {this.state.pressedPray?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedPray: !this.state.pressedPray})}}/>
            </View>
          </View>
        </Card>

        <Card
          title='Jose Otero shared a story'
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
                  name = {this.state.pressedFav?'favorite': 'favorite-border'}
                  color='red'/>
              }
              title = {this.state.pressedFav?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedFav: !this.state.pressedFav})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedSad?'favorite': 'favorite-border'}
                  color='yellow'/>
              }
              title = {this.state.pressedSad?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedSad: !this.state.pressedSad})}}/>

            <Button
              type = 'clear'
              icon={
                <Icon
                  name = {this.state.pressedPray?'favorite': 'favorite-border'}
                  color='green'/>
              }
              title = {this.state.pressedPray?'1': '0'}
              buttonStyle = {{marginLeft: 5}}
              onPress = {() => {this.setState({pressedPray: !this.state.pressedPray})}}/>
            </View>
          </View>
        </Card>
      </ScrollView>
      </View>
    );
  }
}


export default MainSite;
