import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import Home from "./src/Home";
import { TabNavigator, StackNavigator } from 'react-navigation';
import Details from "./src/Details";
import PatientForm from "./src/PatientForm";
import NavBar from "./src/NavBar";

export default class PatientsTracker1 extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      {/* <StatusBar hidden={true}/> */}
          <Home
          Add={() => navigate("AddPatients")}
          View={() => navigate("Details")}
          />
      </View>
    );
  }
}

// const Main = TabNavigator({
//   AddPatients: {screen: PatientForm},
//   Details: {screen: Details},
// })
const AppHome = TabNavigator({
  Home: {screen: PatientsTracker1},
  // Second: {screen: Main},
  Search: { 
    screen: StackNavigator({
      Patients : { screen: NavBar },
      AddPatients: {screen: PatientForm},
      Details: {screen: Details},
    }),
   }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('PatientsTracker1', () => AppHome);
