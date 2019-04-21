/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Button} from 'react-native-elements';

class CreateProfile3 extends Component {
  constructor(props) {
    super(props);
    this.state = {item: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Step 3: {"\n"}
          Privacy Settings
          </Text>
        <Text style={styles.instructions}>
          Choose who this profile wil be visible too.
        </Text>
        <Picker
          style={styles.picker}
          selectedValue = {this.state.item}
          onValueChange= {(label) => this.setState({item: label})}>
          <Picker.Item label="Pubilc" value="Pubilc" />
          <Picker.Item label="Only My Friends can See" value="Friends" />
          <Picker.Item label="Private" value="Private" />
        </Picker>
        <View style={styles.bottomButton}>
          <Button
            title="Continue"
            color="#0000FF"
            containerStyle = {{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('CreateProfile4')}/>
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
   picker : {
     height: 50,
     width: '100%',
     borderWidth: 1,
   },
   button: {
     marginTop: 10,
     marginBottom: 10,
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
   bottomButton: {
     backgroundColor: 'white',
     height: 80,
     position: 'absolute',
     bottom: '5%',
     width: '100%',
   },
 });


 export default CreateProfile3;
