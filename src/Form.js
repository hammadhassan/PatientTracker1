import React, { Component } from 'react';
import {  StyleSheet, Text, View, Button, TextInput, Form, Alert} from 'react-native';

class PatientForm extends Component {
state={
  name: "",
  pro: "",
  doctor:"",
  day: ""
}
onChangeText() {
  name: "",
  pro: "",
  doctor:"",
  day
}
  addPatients() {
    Alert(state, "")
    this.setState({
      name: "",
      pro: "",
      doctor:"",
      day: ""
    })
  }
  render() {
    return (
      <View>

            <TextInput placeholder="Patient Name" 
            onChangeText={name => { this.setState({ name }) }}></TextInput>
            <TextInput placeholder="Patient Problem" 
            onChangeText={pro => { this.setState({ pro }) }}></TextInput>
            <TextInput placeholder="Doctor Name" 
            onChangeText={doctor => { this.setState({ doctor }) }}></TextInput>
            <TextInput placeholder="Day of Appointment" 
            onChangeText={day => { this.setState({ day }) }}></TextInput>
            <Button title="Add Patients" onPress={this.addPatients.bind(this)}/>

      </View>
    );
  }
}

export default PatientForm;  