import React, { Component } from 'react';
import {  StyleSheet, Text, View, Button, TextInput, Form} from 'react-native';

class NavBar extends Component {
  onPress() {
    alert("you press");
  }
  render() {
      {/* <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>Patients Tracker App</Text>
          <Text style={styles.navbarButton} onPress={this.onPress}>Search</Text>
      </View> */}
    return (
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
    );
  }
}

// import React from 'react';
// import { View, Text, StyleSheet, TextInput } from 'react-native';


// const Header = (props) => (
//     <View style={styles.container}>
//     <TextInput
//       style={styles.input}
//       placeholder="Search..."
//       onChangeText={(text) => console.log('searching for ', text)}
//     />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#C1C1C1',
//   },
//   input: {
//     height: 30,
//     flex: 1,
//     paddingHorizontal: 8,
//     fontSize: 15,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 2,
//   },
// });

// export default Header;

const styles = StyleSheet.create({
    /*navbar: {
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
    },*/
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
        // height: 35,
    }
});

export default NavBar;  