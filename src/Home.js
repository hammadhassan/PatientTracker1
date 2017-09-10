import React, { Component } from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends Component {
// constructor(){
//     super()
//     onPress = this.onPress.bind(this);
// }


// onPress() {
//     alert("add");
//     this.props.Add
//     }

  render() {
    return (
        <View>
            <Text>Welcome to the App</Text>
            <Button onPress={this.props.Add} title="Add Patients"/>
            <Button style={styles.btn} onPress={this.props.View} title="View Patients"/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    btn: {
        padding: 5,
        // margin: 10
      }
});