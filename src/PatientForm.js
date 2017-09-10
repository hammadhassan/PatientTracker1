import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class PatientForm extends Component {
  constructor(props){
    super(props)
    this.state={
     List: [
    //     {
    //   name: "this.state",
    //   problem: "",
    //   // date: fullDate,
    //   gender: "",
    //   doctor:"",
    //   day: ""
    // }
  ],
  // List : PatientData
};
    this.onGenderSelect = this.onGenderSelect.bind(this);
    this.onDaySelect = this.onDaySelect.bind(this);
  }

  addPatients() {
    var date = new Date();
    // console.log(date)
    var List = [];
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var fullDate = month + '/' + day + '/' + year;
    var PatientData = {          
      Patients: {
        name: this.state.name, 
        problem: this.state.problem,
        gender: this.state.gender,
        // date: fullDate,
        doc: this.state.doc,
        day: this.state.day,
      }
    }
    alert(PatientData.Patients.name)
    this.props.navigation.navigate('Details');
  }

  onGenderSelect = (gender) => {
    this.setState({
      gender: gender
    });
  }
  onDaySelect = (day) => {
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
            selectedValue={this.state.gender}
            onValueChange={(text) => this.onGenderSelect(text)}>
            <Picker.Item label="Select Gender" value="" />
             <Picker.Item label="Male" value="Male" />
             <Picker.Item label="Female" value="Female" />
            </Picker>
            <TextInput placeholder="Doctor Name" 
            onChangeText={(text) => { this.setState({ doc: text }) }}>
            </TextInput>
            <Text>Day of Appointment</Text>
            <Picker
            selectedValue={this.state.day}
            onValueChange={(text) => this.onDaySelect(text)}>
            <Picker.Item label="Select Day" value="" />
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
            <Button title="Add Patients" onPress={this.addPatients.bind(this)} style={styles.Button}/>
            <Text>{this.state.name}</Text>
            <Text>{this.state.problem}</Text>
            <Text>{this.state.gender}</Text>
            <Text>{this.state.doc}</Text>
            <Text>{this.state.day}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  Button: {
    margin: 50,
    width: 50
  }
})