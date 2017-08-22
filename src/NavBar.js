import React, { Component } from 'react';
import {  StyleSheet, Text, View, Button, TextInput, Form} from 'react-native';

class NavBar extends Component {
  onPress() {
    alert("you press");
  }
  render() {
    return (
      <View>
          <View style={styles.navbar}>
              {/* <Text style={styles.navbarTitle}>Patients Tracker App</Text>
              <Text style={styles.navbarButton} onPress={this.onPress}>Search</Text> */}
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
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "black",
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: "row",
        // alignItems: "center"
    },
    navbarTitle: {
        color: "#FEFEFE",
        textAlign: "center",
        fontWeight: "bold",
        // flex: 1
    },
    navbarButton: {
        width: 50,
        color: "#FEFEFE",
        textAlign: "center"
    },
    searchBar: {
        marginTop: 64,
        padding: 3,
        paddingLeft: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    searchBarInput: {
        fontSize: 15,
        flex: 1,
        height: 30,
    }
});

export default NavBar;  