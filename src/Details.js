import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, View, SectionList, ListView} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Details extends Component {
  constructor(props) {
    super(props)
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    // };
    // var List = [
    //   {
    //     name: "Hammad",
    //     problem: "Floaters",
    //     // date: fullDate,
    //     gender: "Male",
    //     doctor:"Dr Tayyaba",
    //     day: "Friday"
    //   }
    // ]
    this.state = {
      // dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    // List
    List : [
      {
        name: "Hammad Hassan",
        problem: "Floaters",
        // date: fullDate,
        gender: "Male",
        doctor:"Dr Illyass",
        day: "Friday"
      }
    ]
  };
}

componentWillMount() {
  PatientData = this.props.Patients;
  // alert(PatientData);
  // this.setState({
  //   List: PatientData
  // })
}

// PaitentList() {
//   return List(function(patient, i) {
//     return (
//       <View key={i}>
//         <Text>{patient.name}</Text>
//         <View>
//           <Text>{patient.doctor}</Text>
//         </View>
//       </View>
//     )
//   })
// }
    render() {
      return (
          <View>
              {this.state.List.map((value, i) => {
                return <View key={i}>
                  <Text>Name: {value.name}</Text>
                  <Text>Problem: {value.problem}</Text>
                  <Text>Gender: {value.gender}</Text>
                  <Text>Doctor: {value.doctor}</Text>
                  <Text>Day of Appointment: {value.day}</Text>
                </View>
              })}
      </View>
      );
    }
  }

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