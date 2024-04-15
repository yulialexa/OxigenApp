import { NavigationProp } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


interface RouterProps {
    navigation: NavigationProp<any, any>;
  }

const Login = ({navigation}: RouterProps ) => {
      return (
    <View style= {styles.container}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")}/>
      <Text>Login</Text>
          </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEEEEE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        zIndex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 50,
        // resizeMode: 'contain',
      },

  });