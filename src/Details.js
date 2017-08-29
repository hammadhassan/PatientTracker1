import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
    List: [
      {
        name: "",
        problem: "",
        // date: fullDate,
        gender: "",
        doctor:"",
        day: ""
      }
    ]
  };
}

    // componentWillMount() {
    // this.setState({
    //   List: []
    // });
    // }

    render() {
      return (
        <View>
            <Text>
              {/* {this.state.List.map((value, i) => {
                return <Text key={i}> */}
                <Text>Name: {this.props.name}</Text>
                <Text>Problem: {this.props.problem}</Text>
                <Text>Gender: {this.props.gender}</Text>
                <Text>Doctor: {this.props.doc}</Text>
                <Text>Day of Appointment: {this.props.day}</Text>
                </Text>
              {/* })} */}
            {/* </Text> */}
        </View>
      );
    }
  }

    // <Text>Name: {value.name}</Text>
    // <Text>Problem: {text.state.problem}</Text>
    // <Text>Gender: {text.state.gender}</Text>
    // <Text>Doctor: {text.state.doc}</Text>
    // <Text>Day of Appointment: {text.state.day}</Text>

    //   // list: [ {
    //     name: this.state.name,
    //     problem: this.state.pro,
    //     gender: this.state.gender,
    //     doctor: this.state.doc,
    //     day: this.state.day,
    //     }
    //   // ]

  //   <DatePicker
//   style={{width: 200}}
//   date={this.state.date}
//   mode="date"
//   placeholder="select date"
//   format="D/M/YYYY"
//   minDate="1/5/2016"
//   maxDate="1/5/2018"
//   confirmBtnText="Confirm"
//   cancelBtnText="Cancel"
//   customStyles={{
//     dateIcon: {
//       position: 'absolute',
//       left: 0,
//       top: 4,
//       marginLeft: 0
//     },
//     dateInput: {
//       marginLeft: 36
//     }
//     // ... You can check the source to find the other keys. 
//   }}
//   onDateChange={(date) => this.searchByDate(date)}
// />
    // static navigationOptions = {
    //     title: 'Patient Lucy',
    //   };

  //   showData() {
  //     var arrayToPushedData = [];
  //     // db reference
  //     let dbRef = firebase.database().ref('Patients');
  //     dbRef.on('child_added', snap => {
  //         arrayToPushedData = this.state.data;
  //         arrayToPushedData.push(snap.val());
  //         this.setState({
  //             status: true,
  //             data: arrayToPushedData,
  //             // backupData: arrayToPushedData
  //         })
  //     })
  // }