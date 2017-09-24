import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Picker, AsyncStorage, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class PatientForm extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "",
      problem: "",
      gender: "",
      doctor:"",
      day: "",
      PatientsDetails: []
    }
    this.onGenderSelect = this.onGenderSelect.bind(this);
    this.onDaySelect = this.onDaySelect.bind(this);
    this.addPatients = this.addPatients.bind(this);
  }
  
  static navigationOptions = {
        title: "Add Patients",
    };

    // saveData(PatientsDetails) {
    //   AsyncStorage.setItem("@PatientsList:Patients",
    //     JSON.stringify(PatientsDetails)
    //   )
    // }

  addPatients() {
    const { name, problem, gender , doctor } = this.state;
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var fullDate = day + "/" + month + "/" + year;
    // var PatientsData = {          
    //   Patient: {
    //     name: this.state.name, 
    //     problem: this.state.problem,
    //     gender: this.state.gender,
    //     date: fullDate,
    //     doc: this.state.doc,
    //     day: this.state.day,
    //   }
    // }  
    // const data = { name, problem, gender , doctor, date: fullDate};
    
    AsyncStorage.getItem('key', (err, snap) =>{
    var info = JSON.parse(snap);
    alert(info);  
    if (info !== null ) {
        // alert("!null")
        if (Array.isArray(info)) {
          // alert("Array");
          AsyncStorage.setItem("key", JSON.stringify(info.concat(data)))
        } else {
          alert("details");
          AsyncStorage.setItem("key", JSON.stringify([data]))
        }
       } else {
          alert("detail");
          AsyncStorage.setItem("key", JSON.stringify([data]))
        }
        alert(data, "Patient has been added")
    });
    this.setState({
      name: "",
      problem: "",
      gender: "",
      doctor:"",
      day: "",
    });
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
    const { navigate } = this.props.navigation;
    return (
      <View>
            <ScrollView>
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
            <TextInput placeholder=" Doctor Name" 
            onChangeText={(text) => { this.setState({ doctor: text }) }}>
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
            <Button title="Add Patients" onPress={this.addPatients} style={styles.Button}/>
            <Text>{this.state.name}</Text>
            <Text>{this.state.problem}</Text>
            <Text>{this.state.gender}</Text>
            <Text>{this.state.doctor}</Text>
            <Text>{this.state.day}</Text>
            </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1
  },
  Button: {
    margin: 50,
    width: 50
  }
})