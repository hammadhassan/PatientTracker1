import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Details extends Component {
  state = {
    list: [
      {
      name: this.refs.name,
      problem: this.refs.pro,
      doctor: this.refs.dr,
      day: this.refs.day,
      time: new Date()
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