/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, FlatList} from 'react-native';
import {Card, ListItem, Button, Icon, Avatar, List} from 'react-native-elements';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class MainSite extends Component {
  render() {
    return (
      <View style = {{flex: 1}}>
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
                marginTop: 25,
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

        <View>
          <Card
            title='HELLO WORLD'
            image={require('../resources/test4.jpg')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>
        </View>
      </View>
    );
  }
}


export default MainSite;
