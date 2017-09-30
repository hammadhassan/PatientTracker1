import React, { Component } from 'react';
import { View,  TextInput, StyleSheet, AsyncStorage } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator , Item, Input, Button } from 'native-base';

class SearchByDate extends Component {

    componentWillMount() {
        console.disableYellowBox = true
    }
    static navigationOptions = {
        title: "Search By Date",
    }
    constructor() {
        super()
        this.state = {
            data: [],
            date: ""
        }
        this.getDataByDate = this.getDataByDate.bind(this);
    }

	getDataByDate() {
            AsyncStorage.getItem('Patients')
            .then((responce) => {
              let newdata = []
              var foundedData = []
              // console.log(responce)
              let mydata = JSON.parse(responce)
              // console.log(mydata)   
              // console.log(mydata.length)   
              // console.log(newdata)
              for (i = 0; i < mydata.length; i++) {
                newdata.push(mydata[i]);
                // console.log(newdata)
                // console.log(this.state.data)
            }                      
               newdata.map((obj) => {
             if (obj.date === this.state.date) {
                foundedData.push(obj)
            }
        })                 
             this.setState({
                 data: foundedData  
             })
      })
    }

    render() {
        return (
          <Container style={styles.container}>
          <Content style={styles.container}>
          <Item>
            <Input placeholder='Enter Date : 11/9/2017' 
                  onChangeText={(text) => {
                    this.setState({ date: text })
                }}
            />
          </Item>
              <Button 
              style={styles.pList}
               onPress={this.getDataByDate}>
               <Text>Search Patient</Text>
             </Button>
                {this.state.data.map((value, index) => {
                    return    (    
            <List key={index} style={styles.list}>
                <ListItem  bordered>
                  <Text style={styles.pList} >Name : {value.name}</Text>
                </ListItem>
                <ListItem bordered>
                  <Text style={styles.pList}>Problem : {value.problem}</Text>
                </ListItem>
                <ListItem bordered>
                  <Text style={styles.pList}> Date: {value.date}</Text>
                </ListItem>
                <ListItem bordered>
                  <Text style={styles.pList}>Gender : {value.gender}</Text>
                </ListItem >
      		   <ListItem bordered>
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
export default SearchByDate;

const styles = StyleSheet.create({
  pList: {
   marginTop :20,
   marginLeft :20,
  },
  list: {
    borderWidth: 1
  },
  container: {
    backgroundColor: "white"
  },
})