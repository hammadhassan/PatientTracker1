import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, Picker, ScrollView, AsyncStorage } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import { Container, Content, Text, Button } from 'native-base';

var Data = [];

export default class PatientForm extends Component {
  static navigationOptions = {
    title: 'Patient Form',
};
  constructor(props){
    super(props)
    this.state={
      name: "",
      problem: "",
      gender: "",
      doctor:"",
      day: ""
};
    this.onGenderSelect = this.onGenderSelect.bind(this);
    this.onDaySelect = this.onDaySelect.bind(this);
    // console.disableYellowBox = true
  }
  
componentWillMount () {
    console.disableYellowBox = true
        AsyncStorage.getItem('Patients')
            .then((data) => {
            if (data !== null) {
            var newdata = JSON.parse(data)
            // console.log(newdata)
            for (i = 0; i < newdata.length; i++) {
            // console.log(newdata[i])
            Data.push(newdata[i])
            // Data.push(newdata)
          }
        // console.log(array)
        // console.log("Saved Data")
      }
    })
  }

  addPatients() {
    // var Data = [];
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var fullDate = day + '/' + month + '/' + year;
    
    if (this.state.name !== '' &&  this.state.problem !== '' && this.state.gender !== ''
        && this.state.doctor !== '' && this.state.day !== ''
  ) { var PatientsData = {
        name: this.state.name, 
        problem: this.state.problem,
        gender: this.state.gender,
        date: fullDate,
        doctor: this.state.doctor,
        day: this.state.day,
    }
      Data.push(PatientsData)
      // console.log(Data)
      AsyncStorage.setItem('Patients', JSON.stringify(Data))
      .then(() => {
                alert("Patient has been added")
            })
         }
        else{
            alert('Fill the Complete Information')
        }
    this.setState({
      name: "",
      problem: "",
      gender: "",
      doctor:"",
      day: ""
    })
    // this.props.navigation.navigate('Details');
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
                <FormLabel>Full Name</FormLabel>
                  <FormInput
                    value={this.state.name}
                    onChangeText={(text) => { this.setState({ name: text }) }}
                    placeholder="Patient Name"
                  />
                 <FormLabel>Problem</FormLabel>
                  <FormInput
                    value={this.state.problem} 
                    onChangeText={(text) => { this.setState({ problem: text }) }}
                    placeholder="Patient Problem"
                    />
            <FormLabel>Gender</FormLabel>
            <Picker 
            selectedValue={this.state.gender}
            onValueChange={(text) => this.onGenderSelect(text)}
            >
            <Picker.Item label="Select Gender" value="" />
             <Picker.Item label="Male" value="Male" />
             <Picker.Item label="Female" value="Female" />
            </Picker>
            <FormLabel>Doctor</FormLabel>
              <FormInput 
              value={this.state.doctor} 
              placeholder="Doctor Name" 
              onChangeText={(text) => { this.setState({ doctor: text }) }}
              />
            <FormLabel>Day of Appointment</FormLabel>
            <Picker
            selectedValue={this.state.day}
            onValueChange={(text) => this.onDaySelect(text)}
            >
            <Picker.Item label="Select Day" value="" />
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
            
            <Container style={styles.list}>
            <Content>
            <Button primary
            onPress={this.addPatients.bind(this)}
            style={styles.button}
            ><Text> Add Patients </Text></Button>
            </Content>
            </Container>
          </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    flex: 2
  }
})