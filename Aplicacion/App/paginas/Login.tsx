import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity,  ActivityIndicator } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../Firebase/config';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Login = ({ navigation }: RouterProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const singIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('Interno')
    } catch (error: any) {
      console.log(error);
      alert('Iniciar Sesión fallido: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const goToRecuperarConstraseña = () => {
    navigation.navigate('olvidarContraseña');
  };

  const goToRegister = () => {
    navigation.navigate('Registro');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image style={styles.logo} source={require("../../assets/Logo.png")} />
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
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  scrollContainer: {
    flexGrow: 1,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    marginBottom: 20,
    width: '70%',
    height: '40%',
    resizeMode: 'contain',
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
