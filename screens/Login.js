'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  AsyncStorage
} from 'react-native';
import Button from '../components/Button'
import Dimensions from 'Dimensions'
var userIconImage = 'data:image/png;base64,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';
let STORAGE_KEY = 'id_token'
let API_REQUEST_URL = 'http://192.168.0.2:8000/api'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  async onValueChange(item, selectedValue){
      try {
        await AsyncStorage.setItem(item, selectedValue)
      } catch (error) {
        console.log('AsyncStorage error: '+ error.message)
      }
  }

  submitCredentials(){
    // create user for body
    let user = {
      email: this.state.username,
      password: this.state.password
    }
    // login
    this.login(user, () => {
      console.log('hola login');
    })
  }

  login(user,callback) {
    fetch(API_REQUEST_URL+'/login',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.token)
      this.onValueChange(STORAGE_KEY,responseJson.token)
    })
    .catch((error) => {
       console.error(error);
     })
	}

  handleChange(username) {
		this.setState({username});
	}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={{width: 300, height: 300}}
            source={require('../src/img/camera.png')}
          />
          <Text style={styles.headerTitle}>Photopo</Text>
          <Text style={styles.headerFrace}>The best photo</Text>
        </View>
        <View style={styles.loginFormContainer}>
          <View style={styles.inputContainer}>
            <Image style={styles.inputUsername} source={{uri: userIconImage}}></Image>
            <TextInput
              style={[styles.input, styles.greyFont]}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='Enter your name'
              value={this.state.username}
              onChangeText={(username) => this.setState({username})}
              autoCorrect={false}
              autoCapitalize='none'
              placeholderTextColor='#333'
            />
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.inputUsername} source={{uri: userIconImage}}></Image>
            <TextInput
              style={[styles.input, styles.greyFont]}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='Enter your name'
              value={this.setState.password}
              onChangeText={(password) => this.setState({password})}
              autoCorrect={false}
              autoCapitalize='none'
              placeholderTextColor='black'
            />
          </View>
          <Button onPress={this.submitCredentials.bind(this)}>Sing in</Button>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ECF0F1',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    color: '#2C3E50',
    fontSize: 40,
  },
  headerFrace: {
    color: '#7F8C8D',
    fontSize: 18
  },
  loginFormContainer: {
    flex: 0.5,
    paddingLeft: (Dimensions.get('window').width * 0.1),
    paddingRight: (Dimensions.get('window').width * 0.1)
  },
  signInButton: {
    backgroundColor: 'red',
    padding: 20,
    alignItems: 'center',
    marginTop: 30,
    borderWidth:0,
    borderRadius: 8
  },
  inputUsername: {
    marginLeft: 1,
    width: 22,
    height: 22
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 30
  },
  input:{
    position: 'absolute',
    left: 61,
    top:12,
    right: 0,
    height: 40,
    fontSize: 14,
    color: 'red'
  },
  greyFont: {
    color: '#333'
  }
});
module.exports = Login
