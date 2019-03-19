/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 import React, {Component} from 'react';
 import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
 import {createStackNavigator, createAppContainer} from 'react-navigation';

 class CreateProfile3 extends Component {
   render() {
     return (
       <View style={styles.container}>
           <Text style={styles.detail}>Privacy Settings</Text>
             <Text style={styles.instructions}>Choose who this profile wil be visible too.</Text>
             <TextInput
               style={styles.inputblockdate}
               placeholder = ' Public'/>
           <View style={styles.button}>
             <Button
               title="Continue"
               color="#0000FF"
               onPress={() => this.props.navigation.navigate('CreateProfile4')}/>
           </View>
           </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     marginLeft: 60,
     marginRight: 60,
   },
   button: {
     marginTop: 10,
     marginBottom: 10,
   },
   detail: {
     fontSize: 18,
     fontWeight: 'bold',
     color: '#808080',
     marginBottom: 10,
   },
   instructions: {
     color: '#808080',
     fontSize: 13,
   },
   buttonbottom: {
     marginTop: 250,
   },
   method: {
     color: '#808080',
     fontSize: 17,
   },
   optional: {
     color: '#808080',
     fontSize: 17,
   },
   later: {
     textAlign: 'center',
     color: '#808080',
     fontSize: 15,
     marginTop: 20,
   },
   inputblock: {
     borderWidth: 1,
     marginTop: 4,
     marginBottom: 6,
     height: 45,
     fontSize: 18,
   },
   inputblockdate: {
     borderWidth: 1,
     marginTop: 4,
     marginBottom: 6,
     marginRight: 20,
     height: 45,
     fontSize: 18,
   },
 });


 export default CreateProfile3;
