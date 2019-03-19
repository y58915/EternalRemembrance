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
import CreateAProfile from './CreateAProfile';
import PricingOptions from './PricingOptions';


class FreeHostingCouponPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.welcome}>You are receiving 6 months of free hosting.</Text>
        <Text style={styles.regular}>Upgrade now for a discount.</Text>
        <View style={styles.button}>
          <Button
            title=" Get 6 additional months for $29.99"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('FreeHostingCouponPage')}/>
        </View>
        <View style={styles.button}>
        <Button
          title=" Get 6 additional months for $29.99"
          color="#0000FF"
          onPress={() => this.props.navigation.navigate('FreeHostingCouponPage')}/>
      </View>
        <View style={styles.button}>
          <Button
            title=" Continue without upgrade"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('CreateAProfile')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: 280,
    height: 130,
  },
  container: {
    marginLeft: 60,
    marginRight: 60,
  },
  button: {
    marginTop: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#808080',
  },
  instructions: {
    color: '#808080',
    marginBottom: 5,
    fontSize: 15,
  },
  regular: {
    marginTop: 15,
    color:'#808080',
    textAlign: 'center',
    fontSize: 15,
  },
  inputblock: {
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 20,
  },
  forgot: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  noaccount: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    color: '#808080',
  }
});

const FreeHostingCouponPageNavigator = createStackNavigator({
  FreeHostingCouponPage: {screen: FreeHostingCouponPage},
  CreateAProfile: {screen: CreateAProfile},
  PricingOptions: {screen: PricingOptions},
});

const App = createAppContainer(FreeHostingCouponPageNavigator);


export default App;
