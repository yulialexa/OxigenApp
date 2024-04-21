import React, { useState } from 'react';
import { ActivityIndicator, View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Dimensions, useWindowDimensions } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../Firebase/config';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Login = ({ navigation }: RouterProps) => {
  const windowWidth = useWindowDimensions().width; // Obtener el ancho de la ventana
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const singIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert('Iniciar Sesión fallido: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const goToRecuperarConstraseña = () => {
    navigation.navigate('RecuperarContraseña');
  };

  const goToRegister = () => {
    navigation.navigate('Registro');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image style={[styles.logo, { width: windowWidth * 0.5, height: windowWidth * 0.5 }]} source={require("../../assets/Logo.png")} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{`OXIGEN\nAPP`}</Text>
      </View>
      <Text>¡Bienvenido!</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder='Ingrese su email:'
          placeholderTextColor={'#765050C2'}
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={password}
          placeholder='Ingrese su contraseña:'
          placeholderTextColor={'#765050C2'}
          autoCapitalize='none'
          onChangeText={(text) => setPassword(text)}
        />
        {loading ? (
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
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%',
    marginTop: 50,
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: '#2B7532',
    padding: 10,
    width: '50%',
    height: '12%',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center', // Agregar esta línea para centrar horizontalmente
    justifyContent: 'center', // Agregar esta línea para centrar verticalmente
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  input: {
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#FFFFFF',
    color: '#765050C2',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  button1: {
    backgroundColor: '#cff9fd',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  button2: {
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
  buttonText2: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 12,
  },
});
