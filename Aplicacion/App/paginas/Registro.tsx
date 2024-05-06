import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView ,ActivityIndicator, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Pressable, Image, ScrollView } from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification, } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../Firebase/config';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Registro = ({navigation}: RouterProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [Barrio, setBarrio] = useState('');
  const [Direccion, setDireccion] = useState('');

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // Estado para el modal de verificación
  const auth = FIREBASE_AUTH;
  const firestore = FIRESTORE_DB;

  const singUp = async () => {
    setLoading(true);
    try {
      // Crear usuario en Firebase Auth
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (response) => {
          console.log(response);
          // Verificar usuario con el correo
          await sendEmailVerification(auth.currentUser);
          const userUID = auth.currentUser.uid; // Obtén la UID del usuario autenticado
          setModalVisible(true); // Mostrar el modal de verificación
          activateAccount(userUID); // Llama a la función para activar la cuenta y guardar los datos en Firestore
        })
        .catch((error) => {
          console.log(error);
          alert('Registro fallido: ' + error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      alert('Registro fallido: ' + error.message);
      setLoading(false);
    }
  };

  const activateAccount = async (userUID: string) => {
    try {
      // Guardar los datos en Firestore
      const userRef = doc(firestore, 'usuarios', userUID); // Crear una referencia al documento con la UID del usuario
      await setDoc(userRef, { username: username, email: email , nombre, Apellido, Barrio, Direccion }); // Guardar los datos en el documento
      navigation.navigate('Interno'); // Redirigir a la navegación de inicio de sesión
    } catch (error) {
      console.log(error);
      alert('Error al guardar los datos: ' + error.message);
    }
  };


  return (

    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Verifica tu correo electrónico para activar tu cuenta.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);

              }}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <SafeAreaView style={{marginTop: 20 }}> 
    <View style={styles.headerContainer}>
    <View style={styles.iconContainer}>
      <Pressable
              onPress={() => navigation.navigate('Login')}
              style={({ pressed }) => {
                return { opacity: pressed ? 0 : 1 };
              }}>
              <Image style={styles.icon} source={require('../../assets/atras.png')} />
        </Pressable>
      </View>

      </View>

      <View style={styles.titulosContainer}>
      <Text style={styles.titulo}>¡Bienvenido!</Text>
      <Text style={styles.mensaje}>{`"Descubre y transforma:\n Tu guía para reforestar\n áreas desafiantes."`}</Text>
      </View>

      <KeyboardAvoidingView behavior='padding'>
      <TextInput value={username} style={styles.input}  placeholderTextColor={'#765050C2'} placeholder='Usuario' autoCapitalize='none' onChangeText={(text) => setUsername(text)} /> 
      <TextInput value={nombre} style={styles.input} placeholderTextColor={'#765050C2'} placeholder="Nombre:" autoCapitalize="none" onChangeText={(text) => setNombre(text)} />
      <TextInput value={Apellido} style={styles.input} placeholderTextColor={'#765050C2'} placeholder="Apellido:" autoCapitalize="none" onChangeText={(text) => setApellido(text)} />
      <TextInput value={Direccion} style={styles.input} placeholderTextColor={'#765050C2'} placeholder="Direccion de usuario" autoCapitalize="none" onChangeText={(text) => setDireccion(text)} />
      <TextInput value={Barrio} style={styles.input} placeholderTextColor={'#765050C2'} placeholder="Barrio de usuario" autoCapitalize="none" onChangeText={(text) => setBarrio(text)} />
      <TextInput value={email} style={styles.input} placeholderTextColor={'#765050C2'} placeholder="Correo electronico:" autoCapitalize="none" onChangeText={(text) => setEmail(text)} />
      <TextInput value={password} style={styles.input} placeholderTextColor={'#765050C2'} secureTextEntry={true} placeholder="Contraseña:" autoCapitalize="none" onChangeText={(text) => setPassword(text)} />
      </KeyboardAvoidingView>

      
      {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <>
              <TouchableOpacity style={styles.button} onPress={singUp}>
                <Text style={styles.buttonText}>Registrarse</Text>
              </TouchableOpacity>
            </>
          )}
      <Text style={styles.signInText}>¿Ya tienes una cuenta?<Text style={styles.signInLink} onPress={() => navigation.navigate('Login')}> Ingresa</Text>.</Text>
      </SafeAreaView>

    </View>
  )
}

export default Registro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position:'relative'
  },
  titulosContainer: {
    marginTop:10,
    marginBottom: 30,
    textAlign: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 20,
    color: '#765050C2',
    fontWeight: 'bold',
  },
  mensaje: {
    fontSize: 13,
    fontWeight: '500',
    color: '#765050C2',
    textAlign: 'center',
  },
  headerContainer: {
    justifyContent: 'space-between',
    padding: 10,
  },
  signInContainer: {
    position: 'absolute',
    bottom: '82%',
    width: '100%',
    paddingHorizontal: 65,
    zIndex:2
  },
  whiteSheet: {
    width: '100%',
    height: '80%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    color:'#ffffff',
    zIndex:1
  },
  h1: {
    fontFamily: 'Roboto',
    color: '#000000',
    textAlign:'right',
    fontSize: 28,
    fontWeight:'bold',
  },
  signInText: {
    marginTop: 10,
    fontFamily:'Roboto',
    color:'#000000',
    textAlign:'center',
    fontSize:14,
  },
  signInLink: {
    fontWeight:'bold',
    color: 'black',
    
  },
  h2:{
    fontFamily:'Roboto',
    fontWeight:'bold',
    paddingTop:5,
    marginHorizontal: 65,
    color:'#d3d3d3',
    textAlign:'left',
    fontSize:12,
    zIndex:3
  },
  input: {
    fontFamily:'Roboto',
    marginVertical: 10,
    marginHorizontal: 65,
    color: '#765050C2',
    height: 56,
    borderWidth: 0,
    fontWeight: 'bold',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#d3d3d3'
  },
  button: {
    backgroundColor: '#2B7532',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 65,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  // Estilos para el modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  icon: {
    margin: 10,
    width: 35,
    height: 25,
    top: 1,
  },
  iconContainer: {
    width: 35,
    height: 25,
    margin: 10,
    top: 1,
  },
  
});