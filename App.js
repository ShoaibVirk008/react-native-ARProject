import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import BgImage from './Images/wood.jpg'
import logo from './Images/comb.png'

import { Icon } from 'react-native-elements'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      //Flex Box
      // <View style={{ flex: 1}}>
      //   <View style={{ flex: 2, backgroundColor: 'red' }}>

      //   </View>
      //   <View style={{ flex: 2, backgroundColor: 'green' }}>

      //   </View>
      //   <View style={{ flex: 2, backgroundColor: 'blue' }}>

      //   </View>
      // </View>

      //ImageBackground
      //View
      //Text
      //Image
      //TextInput
      //Touchableopacity
      //ScrollView
      <ImageBackground source={BgImage} style={styles.bgContainer}>
        <View style={[styles.parentContainer, { backgroundColor: '#00000080' }]}>
          <ScrollView>
            <View style={{ alignItems: 'center', marginVertical: 50 }}>
              <Image
                source={logo}
                resizeMode="contain"
                style={{ height: 100, width: 100, tintColor: '#FFFFFF' }}
              />
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFFFFF' }}>Barber Shop</Text>
            </View>

            {/* // Simple InputFields
          <View style={{ alignItems: 'center' }}>
            <TextInput
              placeholder="Email"
              style={styles.inputStyle}
            />
            <TextInput
              placeholder="Password"
              style={styles.inputStyle}
            />
          </View>  */}

            <View style={styles.inputContainer}>
              <View style={{ flex: 2 }}>
                <Icon
                  name="email-variant"
                  type="material-community"
                  size={25}
                  color="#FFFFFF"
                />
              </View>
              <View style={{ flex: 8 }}>
                <TextInput
                  placeholder="Email"
                  style={{ height: 50 }}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={{ flex: 2 }}>
                <Icon
                  name="key"
                  type="feather"
                  size={25}
                  color="#FFFFFF"
                />
              </View>
              <View style={{ flex: 8 }}>
                <TextInput
                  placeholder="Password"
                  style={{ height: 50 }}
                />
              </View>
            </View>
            <View style={{ marginHorizontal: 25, alignItems: 'flex-end' }}>
              <Text style={{ color: '#FFFFFF' }}>Forgot Password?</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: 'gray', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    height: null
  },
  parentContainer: {
    flex: 1,

  },
  inputStyle: { height: 50, width: 300, backgroundColor: '#FFFFFF80', borderRadius: 100, paddingHorizontal: 10, marginBottom: 10 },
  inputContainer: {
    marginHorizontal: 25,
    backgroundColor: '#FFFFFF80',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  button: {
    marginHorizontal: 25,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50
  }

})