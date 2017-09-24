import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';

class PatientsDetails extends Component {
    constructor(props) {
        super(props)
    this.state = {
        Data: []
    }
    // this.showData = this.showData.bind(this);
}

componentWillMount() {
        console.disableYellowBox = true
        AsyncStorage.getItem(
          "key", 
          (err, data) => {
            if (err) {
              alert("Error loading data", err)
            } else {
              const availablePatients = JSON.parse(data)
              this.setState({
                Data: availablePatients,
              })
            }
            alert(data);
          }
          // alert(data);
        )
    }

// showData() {
    // var Data = [];
//     try {
//             const value = AsyncStorage.getItem("key");
//             if (value !== null) {
//                 // We have data!!
//                 parsedVal = JSON.parse(value);
//                 // console.log(parsedVal);
//                 Data = parsedVal;
//                 this.setState({
//                     data: Data
//                 })
//             }
//             alert(Data);
//         } catch (error) {
//             // Error retrieving data
//             console.log('error get item', error);
//         }
    // }

// componentDidMount() {
//     this.showData()
//     // alert(data);
// }

//   componentWillMount() {
//     // this.setState({ fetching: true }, () => {
//     //   AsyncStorage.getItem('key').then((snap)=>{
//     //     this.setState({
//     //         value: JSON.parse(snap)
//     //         data: Data
//     //       // this.showData()
//     //         .then((data) => {
//     //           this.setState({
//     //             data: data,
//     //             fetching: false
//     //           })
//     //         })
//     //     });
//     //   })
//     // });
//     console.disableYellowBox = true
//     this.showData() 
// }
//  // async showData() {
//     showData() {
//     var DataArray = []
//     AsyncStorage.getItem('key')
//     // var info = JSON.parse(snap);
//     // const data = await AsyncStorage.getItem("key");
//     .then((data) => {
//     // if (data !== null) {
//     // // We have data!!
//     parsedVal = JSON.parse(data);
//     // // console.log(parsedVal);
//     DataArray = parsedVal;
//     this.setState({
//         data: DataArray
//         })
//     alert(data + " " + "this is your data");
//       // }
//   })
//       .catch((err) => {
//         alert("Error" + err)
//       })
//   }

static navigationOptions = {
        title: 'Your Patients',
    };

 render() {
    return (
      <View>
      <ScrollView>
        {this.state.Data.map((value, i) => {
            return <View key={i}>
              <Text>Name: {value.Data.name}</Text>
              <Text>Problem: {value.Data.problem}</Text>
              <Text>Date: {value.Data.date}</Text>
              <Text>Gender: {value.Data.gender}</Text>
              <Text>Doctor: {value.Data.doctor}</Text>
              <Text>Day of Appointment: {value.Data.day}</Text>
            </View>
          })}
       </ScrollView>   
      </View>
      );
    }
}

export default PatientsDetails;