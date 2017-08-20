import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Details extends Component {
    static navigationOptions = {
        title: 'Patient Lucy',
      };
    render() {
      return (
        <View>
            <Text>
              Details of Lucy
            </Text>
        </View>
      );
    }
  }