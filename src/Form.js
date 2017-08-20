import React, { Component } from 'react';
import {  StyleSheet, Text, View, Button, TextInput, Form} from 'react-native';

class PatientForm extends Component {
  render() {
    return (
      <View>

          <TextInput placeholder="Patient Name"></TextInput>
          <TextInput placeholder="Patient Disease"></TextInput>
          <TextInput placeholder="Doctor Name"></TextInput>
          <TextInput placeholder="Day of Appointment"></TextInput>
            <Button value="Add Patient"></Button>
      </View>
    );
  }
}

export default PatientForm;  