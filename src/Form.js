import React, { Component } from 'react';
import {  StyleSheet, Text, View, Button, TextInput, Form, Alert} from 'react-native';

export default class PatientForm extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "",
      pro: "",
      doctor:"",
      day: ""
    }
  }
// onChangeText() {
//   thie.setState({
//   name: "",
//   pro: "",
//   doctor: "",
//   day: ""
// })
// }
/*
onUsernameChange(username) {
  let s = this.state;
  s.username = username;
  this.setState(s);   
}

onPasswordChange(password) {
  let s = this.state;
  s.password = password;
  this.setState(s);   
}*/
  addPatients() {
    // Alert()
    this.setState({
      name: "",
      pro: "",
      doc:"",
      day: ""
    })
    // alert(state);
  }

  onChangeText() {
    this.setState({
      name: name,
      pro: pro,
      doc: doc,
      day: day
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
            onChangeText={doc => { this.setState({ doc }) }}></TextInput>
            <TextInput placeholder="Day of Appointment" 
            onChangeText={day => { this.setState({ day }) }}></TextInput>
            <Button title="Add Patients" onPress={this.addPatients.bind(this)} style={styles.Button}/>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  Button: {
    margin: 50
  }
})