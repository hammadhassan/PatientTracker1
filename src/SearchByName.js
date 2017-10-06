import React, { Component } from 'react';
import { View,  TextInput, StyleSheet, AsyncStorage } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator , Item, Input, Button } from 'native-base';

class SearchByName extends Component {

    componentWillMount() {
        console.disableYellowBox = true
    }
    static navigationOptions = {
        title: "Search By Name",
    }
    constructor() {
        super()
        this.state = {
            data: [],
            name: ""
        }
    }

	getDataByName() {
            AsyncStorage.getItem('Patients')
            .then((responce) => {
              let newdata = []
              var foundedData = []
              // console.log(responce)
              let mydata = JSON.parse(responce)
              // console.log(mydata)   
              // console.log(mydata.length)   
              // console.log(newdata)
              for ( i = 0; i < mydata.length; i++) {
                  newdata.push(mydata[i]);
                  // console.log(newdata)
                  // console.log(this.state.data)
              }                      
                  newdata.map((obj) => {
                  if (obj.name === this.state.name) {
                      foundedData.push(obj)
                      // console.log(obj)
                  } 
                  // else {
                  //   alert("Patient not found")
                  // }
                })
                // if (foundedData === name) {
                //   // alert("Patient not found")
                // }
                //   else {
                //     alert("Patient not found")
                //   }                
                 this.setState({
                 data: foundedData  
               })
          })
    }

    render() {
        return (
            <Container style={styles.container}>
            <Content style={styles.container}>
          <Item bordered>
            <Input placeholder='Enter Name' 
                   onChangeText={(text) => {
                    this.setState({ name: text })
                }}
            />
          </Item>
              <Button 
              style={styles.btn}
               onPress={this.getDataByName.bind(this)}>
               <Text>Search Patient</Text>
             </Button>
                {this.state.data.map((value, index) => {
                    return    (
            <List key={index} style={styles.list}>
                <ListItem  bordered>
                  <Text style={styles.pList} >Name : {value.name}</Text>
                </ListItem>
                <ListItem >
                  <Text style={styles.pList}>Problem : {value.problem}</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.pList}> Date: {value.date}</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.pList}>Gender : {value.gender}</Text>
                </ListItem>
      		   <ListItem>
                  <Text style={styles.pList}> Doctor : {value.doctor}</Text>
                </ListItem>
           </List>
                    )
                })}
                </Content>
            </Container>
        )
    }
}
export default SearchByName;

const styles = StyleSheet.create({
  list: {
    borderWidth: 1
  },
  container: {
    backgroundColor: "white"
  },
  btn: {
    marginTop :10,
    marginBottom: 10,
    alignSelf: "center",
  }
})