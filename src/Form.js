import React, { Component } from 'react';
import {  StyleSheet, Text, View, Button, TextInput, Form,} from 'react-native';

class PatientForm extends Component {
  addPatients() {
    alert("Patients has been added")
  }
  render() {
    return (
      <View>

            <TextInput placeholder="Patient Name"></TextInput>
            <TextInput placeholder="Patient Problem"></TextInput>
            <TextInput placeholder="Doctor Name"></TextInput>
            <TextInput placeholder="Day of Appointment"></TextInput>
            <Button title="Add Patients" onPress={this.addPatients.bind(this)}/>

      </View>
    );
  }
}

export default PatientForm;  