import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, View, Button} from 'react-native';
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
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Home
          Add={() => this.props.navigation.navigate("AddPatients")}
          View={() => this.props.navigation.navigate("Details")}
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
  Main: { 
    screen: StackNavigator({
      AddPatients: {screen: PatientForm},
      Details: {screen: Details},
    }),
  Patients : { screen: NavBar }
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
