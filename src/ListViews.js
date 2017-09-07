// import React, { Component } from 'react';
// import {  ListView, Text, View, Button, TextInput, Form} from 'react-native';
// import data from "./demoData";

// class ListViews extends Component {
//     constructor(props) {
//         super(props)
//         const ds = new ListView.DataSource({
//             rowHasChanged: (r1, r2) => r1 != r2
//         })
//         // const Patients = ["patient", "patients"]
//         this.state = {
//         //     "patient": [
//         //     name = "Hammad",
//         //     gender = "Male",
//         //     age = 24,
//         //     problem = "Floaters",
//         //     doctor = "Esha",
//         //     day = "Thursday"
//         // ],
//         data,
//         // DataSource: this.ds.cloneWithRows()
//         dataSource: ds.cloneWithRows(['row 1', 'row 2']),
//         }
//     }
//     render() {
//         return (
//             <ListView 
//             dataSource={this.state.dataSource}
//             renderRow={(data) => <View {...data} ></View>}
//             renderSeparator={(sectionId, rowId) => <View key={rowId} />}
//             >
//             {/* <Text>
//                     {this.state.Patients}
//             </Text>     */}
//             </ListView>
//         );
//     }
// }

// export default ListViews;