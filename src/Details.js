import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, FlatList, Dimensions, AsyncStorage, ActivityIndicator, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
// import { List, ListItem } from 'react-native-elements';
import { Container, Header, Content, List, ListItem, Text, Separator , Item, Input } from 'native-base';

export default class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
    data : [],
    isLoading: true
  };
}

static navigationOptions = {
    title: 'Patients Details',
  };

componentDidMount() {
    console.disableYellowBox = true
  }
  PatientsData(){
      AsyncStorage.getItem('Patients')
        .then((responce) => {
            let  newdata = []
            // console.log(responce)
            let mydata = JSON.parse(responce)                        
            // console.log(mydata)
            // console.log(newdata)
            for ( i = 0; i < mydata.length; i++) {
                newdata.push(mydata[i]);
                // console.log(newdata)
                // console.log(this.state.data)
            }
            // var data = mydata                      
             this.setState({
                 data : newdata
             })
                // console.log(this.state.data)                  
        })
}
refreshList() {
  if (!this.state.isLoading) {
    return <ActivityIndicator size={50}/>
  } return (
          <Button 
          title="Refresh List"
          onPress={this.PatientsData.bind(this)} 
          />
    )
}
  render() {
    return (
        <ScrollView style={styles.container}>
          <View style={styles.Rlist} >
           {this.refreshList()}
           </View>
          <Container style={styles.container}>
          <Content style={styles.container}>
          {this.state.data.map((value, index) => {
            return <List style={styles.list} key={index}>
              <ListItem>
              <Text style={styles.text}>Name: {value.name}</Text>
              </ListItem>
              <ListItem>
              <Text style={styles.text}>Problem: {value.problem}</Text>
              </ListItem>
              <ListItem>
              <Text style={styles.text}>Date: {value.date}</Text>
              </ListItem>
              <ListItem>
              <Text style={styles.text}>Gender: {value.gender}</Text>
              </ListItem>
              <ListItem>
              <Text style={styles.text}>Doctor: {value.doctor}</Text>
              </ListItem>
              <ListItem>
              <Text style={styles.text}>Day of Appointment: {value.day}</Text>
              </ListItem>
            </List>
          })}
          </Content>
          </Container>
          </ScrollView>
      );
    }
  }

const { height, width } = Dimensions.get('window') ;

const styles = StyleSheet.create({
  container: {
  backgroundColor: "white"
  },
  list: {
    borderWidth: 1
  },
  text: {
    marginTop :20,
    marginLeft :20,
    marginRight: 20
  },
  Rlist: {
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    flex: 2
  }
})