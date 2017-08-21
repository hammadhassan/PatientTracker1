import React, { Component } from 'react';
import {  StyleSheet, Text, View, Button, TextInput, Form,} from 'react-native';

class PatientForm extends Component {
  addPatients() {
    alert("Patients has been added")
  }
  render() {
    return (
      <View>

            <TextInput placeholder="Patient Name" ref="name"></TextInput>
            <TextInput placeholder="Patient Problem" ref="pro"></TextInput>
            <TextInput placeholder="Doctor Name" ref="de"></TextInput>
            <TextInput placeholder="Day of Appointment" ref="day"></TextInput>
            <Button title="Add Patients" onPress={this.addPatients.bind(this)}/>

      </View>
    );
  }
}

export default PatientForm;  