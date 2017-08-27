import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

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
    this.state = {
      name: this.state.name, 
      pro: this.state.pro,
      gender: this.state.gender,
      doc: this.state.doc,
      day: this.state.day
    }
    // alert(this.state);
  }

  // onChangeText() {
  //   this.setState({
  //     name: name,
  //     pro: pro,
  //     doc: doc,
  //     day: day
  //   })
  // }

  render() {
    return (
      <View>
            <TextInput placeholder="Patient Name"
            onChangeText={text => { this.setState({ name: text }) }}></TextInput>
            <TextInput placeholder="Patient Problem" 
            onChangeText={text => { this.setState({ pro: text }) }}></TextInput>
            <TextInput placeholder="Gender"
            onChangeText={text => {this.setState({gender: text})}}></TextInput>
            <TextInput placeholder="Doctor Name" 
            onChangeText={text => { this.setState({ doc: text }) }}></TextInput>
            <TextInput placeholder="Day of Appointment" 
            onChangeText={text => { this.setState({ day: text }) }}></TextInput>
            <Button title="Add Patients" onPress={this.addPatients.bind(this)} style={styles.Button}/>
            <Text>{this.state.name}</Text>
            <Text>{this.state.pro}</Text>
            <Text>{this.state.gender}</Text>
            <Text>{this.state.doc}</Text>
            <Text>{this.state.day}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  Button: {
    margin: 50
  }
})