import React, { Component } from 'react';
import {StyleSheet, Text, Button, TextInput, Form} from 'react-native';
import {Drawer, View} from "native-base";
import { Navigator } from 'react-native-deprecated-custom-components';
// import NavigationExperimental from 'react-native-deprecated-custom-components';
// import { StackNavigator } from 'react-navigation';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      store: {},
      theme: null
    }
  }
  toggleDrawer() {
    this.state.toggled ? this._drawer.close() : this._drawer.open()
  }
  openDrawer() {
    this.setState({toggled: true})
  }
  closeDrawer() {
    this.setState({toggled: false})
  }
  renderScene(route, navigator) {
    switch(route) {
      default: {
        return null
      }
    }
  }
  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight
  }
  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="displace"
        content={<View style={{backgroundColor: "#000", height: 1000}}/>}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer.bind(this)}
        openDrawerOffset={0.2}
        >
          <Navigator
            ref={(ref) => this._navigator = ref}
            configureScene={this.configureScene.bind(this)}
            renderScene={this.renderScene.bind(this)}
            />
        </Drawer>
    )
  }
}