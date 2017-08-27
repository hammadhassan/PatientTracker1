import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Details extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   // list: [ {
    //     name: this.state.name,
    //     problem: this.state.pro,
    //     gender: this.state.gender,
    //     doctor: this.state.doc,
    //     day: this.state.day,
    //     }
    //   // ]
    // }
  // }
  }
    // static navigationOptions = {
    //     title: 'Patient Lucy',
    //   };
    render() {
      return (
        <View>
            {/* <Text>
              {this.state.list.map((value, i) => {
                return <Text key={i}>
                <Text>{this.state.name}</Text>
                <Text>{this.state.problem}</Text>
                <Text>{this.state.gender}</Text>
                <Text>{this.state.doc}</Text>
                <Text>{this.state.day}</Text>
                </Text>
              })}
            </Text> */}
        </View>
      );
    }
  }