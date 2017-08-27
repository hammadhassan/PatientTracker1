import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Picker } from 'react-native';

export default class PatientForm extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "",
      problem: "",
      // date: fullDate,
      gender: "",
      doctor:"",
      // day: ""
    }
  }

  addPatients() {
    var date = new Date();
    // console.log(date)
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var fullDate = month + '/' + day + '/' + year;
    var patientData = {          
      patient: {
        name: this.state.name, 
        problem: this.state.problem,
        gender: this.state.gender,
        date: fullDate,
        doc: this.state.doc,
        // day: this.state.day,
      }
    }
    alert(patientData);
    // this.props.navigation.navigate('Details');  
    {/* onValueChange={(item) => this.watchGender(item)} */}
    // onChangeText={text => {this.setState({gender: text})}}
    {/* selectedValue={this.state.gender}  */}
  }

  onGenderSelect(gender) {
    this.setState({
      gender: gender
    });
  }
  onValueChange(day) {
    this.setState({
      day: day
    });
  }

  render() {
    return (
      <View>
            <TextInput placeholder="Patient Name"
            onChangeText={(text) => { this.setState({ name: text }) }}></TextInput>
            <TextInput placeholder="Patient Problem" 
            onChangeText={(text) => { this.setState({ problem: text }) }}></TextInput>
            <Text>Gender</Text>
            <Picker 
            onChangeText={(text) => {this.onGenderSelect(gender)}}
              onValueChange={this.onValueChange.bind(this)}>
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
            </Picker>
            <TextInput placeholder="Doctor Name" 
            onChangeText={(text) => { this.setState({ doc: text }) }}></TextInput>
            <Text>Day of Appointment</Text>
            <Picker
            onChangeText={(text) => {this.onValueChange(day)}}
            
            >
              <Picker.Item label="Monday" value="monday" />
              <Picker.Item label="Tuesday" value="tuesday" />
              <Picker.Item label="Wednesday" value="wednesday" />
              <Picker.Item label="Thursday" value="thursday" />
              <Picker.Item label="Friday" value="friday" />
              <Picker.Item label="Saturday" value="saturday" />
              <Picker.Item label="Sunday" value="sunday" />
            </Picker>
            <Button title="Add Patients" onPress={this.addPatients.bind(this)} style={styles.Button}/>
            <Text>{this.state.name}</Text>
            <Text>{this.state.problem}</Text>
            {/* <Text>{this.state.gender}</Text> */}
            <Text>{this.state.doc}</Text>
            {/* <Text>{this.state.day}</Text> */}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  Button: {
    margin: 50
  }
})