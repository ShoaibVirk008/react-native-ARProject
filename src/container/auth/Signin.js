import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import BgImage from '../../assets/images/wood.jpg'
import logo from '../../assets/images/comb.png'

import { Icon } from 'react-native-elements'
import InputWithIcon from '../../components/InputWithIcon';
import { totalSize, height } from 'react-native-dimension';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordSecured: true,
      email:'',
      password:''
    };
  }

  managePasswordSecurity = () => {
    this.setState({ isPasswordSecured: !this.state.isPasswordSecured })
  }

  render() {
    const {isPasswordSecured,email,password}=this.state
    return (
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
            <InputWithIcon
              iconName="email-variant"
              iconType="material-community"
              placeholder="Email"
              value={email}
              onChangeText={(text)=>this.setState({email:text})}
              rightIcon={email?true:false}
              rightIconName={'check-circle'}
              rightIconType="material-community"
            />
            <InputWithIcon
              iconName="key"
              iconType="material-community"
              secureTextEntry={isPasswordSecured}
              placeholder="Password"
              rightIcon={true}
              rightIconName={isPasswordSecured?"eye":'eye-off'}
              rightIconType="material-community"
              onPressRightIcon={() => this.managePasswordSecurity()}
            />
            <Text style={{ color: '#FFFFFF', textAlign: 'right' }}>Forgot Password?</Text>
            <TouchableOpacity onPress={() => Alert.alert('Login')} style={styles.button}>
              <Text style={{ color: 'gray', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default Signin;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    height: null
  },
  parentContainer: {
    flex: 1,
    padding: totalSize(2.5)
  },
  inputStyle: { height: 50, width: 300, backgroundColor: '#FFFFFF80', borderRadius: 100, paddingHorizontal: 10, marginBottom: 10 },
  button: {
    height: height(7),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height(5)
  }

})