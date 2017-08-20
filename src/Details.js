import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Details extends Component {
  state = {
    list: [
      {
      name: "Abc",
      problem: "fgh",
      doctor: "kt",
      day: "tuesday",
      time: new Date();
      }
    ]
  }
    static navigationOptions = {
        title: 'Patient Lucy',
      };
    render() {
      return (
        <View>
            <Text>
              {this.state.list.map((value, i) => {
                return <Text key={i}>
                  
                </Text>
              })}
            </Text>
        </View>
      );
    }
  }