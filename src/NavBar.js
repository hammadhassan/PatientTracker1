import React, { Component } from 'react';
import {  StyleSheet, Text, View, Button, TextInput, Form} from 'react-native';
import PatientsDetails from "./PatientsDetails";

class NavBar extends Component {
  onPress() {
    // alert("you press");
  }
  render() {
    return (
          <View >
           <View style={styles.searchBar}> 
              <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Search for Patients"
              style={styles.searchBarInput}
              returnKeyType="search"
              enablesReturnKeyAutomatically={true}
              ></TextInput>
              </View>
        <View>
            <PatientsDetails />
        </View>
         </View>
    );
  }
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 10,
        padding: 3,
        paddingLeft: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        alignSelf: "center",
    },
    searchBarInput: {
        flex: 1,
        fontSize: 15,
    }
});

export default NavBar;  