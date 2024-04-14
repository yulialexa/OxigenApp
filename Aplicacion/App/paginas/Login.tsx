import { NavigationProp } from '@react-navigation/native';
import { View, Text } from 'react-native'
import React from 'react'

interface RouterProps {
    navigation: NavigationProp<any, any>;
  }

const Login = ({navigation}: RouterProps ) => {
      return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login