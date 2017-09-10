import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Details extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
    data : [
      {
        name: "Hammad Hassan",
        problem: "Floaters",
        // date: fullDate,
        gender: "Male",
        doctor:"Dr Illyass",
        day: "Friday"
      }
    ]
  };
}

componentWillMount() {
  // PatientData = this.props.Patients;
  try {
    AsyncStorage.setItem(
      "@PaitentsList:Data",
      JSON.stringify(data)
    )
  } catch (error) {
  
    }
}

  render() {
    return (
      <View>
        {this.state.data.map((value, i) => {
          return <View key={i}>
            <Text>Name: {value.name}</Text>
            <Text>Problem: {value.problem}</Text>
            <Text>Gender: {value.gender}</Text>
            <Text>Doctor: {value.doctor}</Text>
            <Text>Day of Appointment: {value.day}</Text>
          </View>
        })}
      </View>
      );
    }
  }