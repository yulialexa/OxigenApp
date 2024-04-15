import { NavigationProp } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import React,{useState} from 'react'
import { FIREBASE_AUTH } from '../../Firebase/config';

interface RouterProps {
    navigation: NavigationProp<any, any>;
  }

const Login = ({navigation}: RouterProps ) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

      return (
    <View style= {styles.container}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")}/>
      <Text>OXIGENAPP</Text> 
      <KeyboardAvoidingView behavior='padding'>
        <TextInput style={styles.input} value={email} placeholder='Ingrese su email:' autoCapitalize='none' onChangeText={(text)=> setEmail(text)}></TextInput>
        <TextInput secureTextEntry={true} style={styles.input} value={password} placeholder='Ingrese su contraseña:' autoCapitalize='none' onChangeText={(text)=> setPassword(text)}></TextInput>
        </KeyboardAvoidingView>
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
      input: {
        marginVertical: 10,
        marginHorizontal: 20,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        padding: 10,
        backgroundColor: '#5d524c',
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '80%', 
        
      },
      

  });