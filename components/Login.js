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
import CreateNewAccount from './CreateNewAccount';
import SelectAnOption from './SelectAnOption';
import EnterCoupon from './EnterCoupon';
import PricingOptions from './PricingOptions';
import FreeHosting from './FreeHosting';
import Empty from './Empty';
import ForgotPassword from './ForgotPassword';
import Subscription from './Subscription';
import GoToStore from './GoToStore';
import Congrats from './Congrats';
import CreateProfile1 from './CreateProfile1';
import CreateProfile2 from './CreateProfile2';
import CreateProfile3 from './CreateProfile3';
import CreateProfile4 from './CreateProfile4';
import CreateProfile5 from './CreateProfile5';
import CreateProfile6 from './CreateProfile6';
import MainSite from './MainSite';
import WriteStory from './WriteStory';
import MainSite2 from './MainSite2';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={styles.image}
            source={require('../resources/logo.jpg')}/>
        </View>
        <Text style={styles.welcome}>Log In</Text>
        <Text style={styles.instructions}>Username</Text>
        <TextInput
          keyboardType= 'email-address'
          style={styles.inputblock}
          placeholder=' johndoe@mail.com'>
        </TextInput>
        <Text style={styles.instructions}>Password</Text>
        <TextInput
          style={styles.inputblockpassword}
          secureTextEntry= {true}
          placeholder=' ••••••'>
        </TextInput>
        <View style={styles.button}>
          <Button
            title="Sign In"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('MainSite')}/>
        </View>
        <Text style={styles.forgot} onPress={() => this.props.navigation.navigate('CreateProfile1')}>
          Forgot Password?
        </Text>
        <Text style={styles.noaccount}>Don't have an account?</Text>
        <View style={styles.button}>
          <Button
            title="Join Now"
            color="#0000FF"
            onPress={() => this.props.navigation.navigate('CreateNewAccount')}/>
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
    height: 120,
  },
  container: {
    marginLeft: 60,
    marginRight: 60,
  },
  button: {
    marginTop: 5,
  },
  welcome: {
    fontSize: 25,
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
  inputblockpassword: {
    borderWidth: 1,
    marginBottom: 10,
    height: 40,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputblock: {
    borderWidth: 1,
    marginBottom: 10,
    height: 45,
    fontSize: 18,
  },
  forgot: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 10,
    fontSize: 15,
    color: 'blue',
  },
  noaccount: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    color: '#808080',
  }
});

const LoginContainer = createStackNavigator({
  Login: {screen: Login},
  CreateNewAccount: {screen: CreateNewAccount},
  SelectAnOption: {screen: SelectAnOption},
  EnterCoupon: {screen: EnterCoupon},
  PricingOptions: {screen: PricingOptions},
  FreeHosting: {screen: FreeHosting},
  Empty: {screen: Empty},
  ForgotPassword: {screen: ForgotPassword},
  Subscription: {screen: Subscription},
  GoToStore: {screen: GoToStore},
  Congrats: {screen: Congrats},
  CreateProfile1: {screen: CreateProfile1},
  CreateProfile2: {screen: CreateProfile2},
  CreateProfile3: {screen: CreateProfile3},
  CreateProfile4: {screen: CreateProfile4},
  CreateProfile5: {screen: CreateProfile5},
  CreateProfile6: {screen: CreateProfile6},
  MainSite: {screen: MainSite},
  WriteStory: {screen: WriteStory},
  MainSite2: {screen: MainSite2},
});

const App = createAppContainer(LoginContainer);


export default App;
