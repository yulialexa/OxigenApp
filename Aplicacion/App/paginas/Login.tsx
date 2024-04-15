import { NavigationProp } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ActivityIndicator ,View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
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

  const singIn = async () => {
    setLoading(true);
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);

    } catch (error: any) {
      console.log(error);
      alert('Iniciar Sesión fallido: '+ error.message);
    } finally {
      setLoading(false);
    }
  }

  const goToRecuperarConstraseña = () => {
    navigation.navigate('RecuperarContraseña');
  }

  const goToRegister = () => {
    navigation.navigate('Registro'); // Navega a la pantalla de registro
  };



      return (
    <View style= {styles.container}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")}/>
      <Text>OXIGENAPP</Text> 
      <Text>¡Bienvenido!</Text>
      <KeyboardAvoidingView behavior='padding'>
        <TextInput style={styles.input} value={email} placeholder='Ingrese su email:' autoCapitalize='none' onChangeText={(text)=> setEmail(text)}></TextInput>
        <TextInput secureTextEntry={true} style={styles.input} value={password} placeholder='Ingrese su contraseña:' autoCapitalize='none' onChangeText={(text)=> setPassword(text)}></TextInput>
        
        { loading ? (
            <ActivityIndicator size="large" color="#0000" />
        ) : (
            <>
              <TouchableOpacity style={styles.button2} onPress={goToRecuperarConstraseña}>
                <Text style={styles.buttonText2}>¿Olvidó su Contraseña?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button1} onPress={singIn}>
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button2} onPress={goToRegister}>
                <Text style={styles.buttonText2}>¡Inscribete!</Text>
              </TouchableOpacity>
            </>
        )}
 
        
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
        width: 170,
        height: 170,
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
      button1: {
        backgroundColor: '#cff9fd',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 65,
        alignItems: 'center',
        // alignSelf: 'center',
        marginTop: 10
      },
      button2: {
        // backgroundColor: '#cff9fd',
        padding: 10,
        borderRadius: 5,
        // alignItems: 'center',
        // width: '80%',
        // alignSelf: 'center',
        marginTop: 10
      },
      buttonText: {
        color: '#000000',
        fontSize: 16
      },
      buttonText2: {
        textAlign:'center',
        color: '#000000',
        fontSize: 12
      },
      

  });