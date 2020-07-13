import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Signin from './src/container/auth/Signin';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <SafeAreaView style={{flex:1}}>
       <Signin/>
    </SafeAreaView>
    );
  }
}

export default App;
