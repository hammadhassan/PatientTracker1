import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, View, Button} from 'react-native';
// import Home from "./src/Home";
import { TabNavigator } from 'react-navigation';
import Details from "./src/Details";
import PatientForm from "./src/Form";
import NavBar from "./src/NavBar";

export default class PatientsTracker1 extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        {/* <Button
          onPress={() => navigate('Details')}
          title="Click for details"
        /> */}
          <PatientForm />
          {/* <NavBar /> */}
      </View>
    );
  }
}

const AppHome = TabNavigator({
  initialRoute: {screen: NavBar},
  Home: { screen: PatientsTracker1 },
  Details: { screen: Details}
});

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});

AppRegistry.registerComponent('PatientsTracker1', () => AppHome);
