import React, { Component } from 'react';
import { Text, View, Button, ScrollView} from 'react-native';
// import data from "./demoData";

class PatientsDetails extends Component {
    constructor(props) {
        super(props)
    this.state = {
        // PatientsData: [
        //     Patient
        // ]
    }
}
    render() {
        return (
            <ScrollView>
                <Text>PatientsData</Text>
                {/* <Text>{this.state.PatientsData}</Text> */}
                {/* <Text>{this.state.Patient}</Text> */}
            </ScrollView>
        );
    }
}

export default PatientsDetails;